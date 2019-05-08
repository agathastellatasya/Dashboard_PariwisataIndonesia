function multiSeriesLineChart(config) {
    drawmultiSeriesLineChartCharts(config);
}

function createmultiSeriesLineChartLegend(mainDiv, columnsInfo, colorRange, config) {
    var z = d3.scaleOrdinal()
        .range(colorRange);
    var mainDivName = mainDiv.substr(1, mainDiv.length);
    $(mainDiv).after("<div id='Legend_" + mainDivName + "' class='pmd-card-body' style='display: flex; flex-direction: row; flex-wrap: wrap; width: " + 
        config.legendWidth + "; margin-left: " + config.legendMarginLeft + ";'></div>");
    var keys = Object.keys(columnsInfo);
    keys.forEach(function (d) {
    var cloloCode = z(d);
    $("#Legend_" + mainDivName).append("<span class='team-graph team1' style='display: inline-block; margin-right:10px;'>\
                <span style='background:" + cloloCode + ";width: 10px;height: 10px;display: inline-block;vertical-align: middle;'>&nbsp;</span>\
                <span style='padding-top: 0;font-family: 'Roboto', sans-serif;font-size: 13px;display: inline;'>" + columnsInfo[d] + " </span>\
            </span>");
    });
}
  
function drawmultiSeriesLineChartCharts(config) {
    var keys = Object.keys(config.data[0]);
    var tempObj = {};
    keys.forEach(function (d) {
        tempObj[d] = 0;
    });

    var data = config.data;
    var columnsInfo = config.columnsInfo;
    var xAxis = config.xAxis;
    var yAxis = config.yAxis;
    var colorRange = config.colorRange;
    var mainDiv = config.mainDiv;
    var mainDivName = mainDiv.substr(1, mainDiv.length);
    var label = config.label;
    var requireLegend = config.requireLegend;
    
    d3.select(mainDiv).append("svg").attr("width", config.width).attr("height", config.height);
    var svg = d3.select(mainDiv + " svg").attr("id","svgPrimaryLineChart"),
        margin = { top: config.marginTop, right: config.marginRight, bottom: config.marginBottom, left: config.marginLeft },
        width = svg.attr("width") - margin.left - margin.right,
        height = svg.attr("height") - margin.top - margin.bottom;
    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    if (requireLegend != null && requireLegend != undefined && requireLegend != false) {
        $("#Legend_" + mainDivName).remove();
        createmultiSeriesLineChartLegend(mainDiv, columnsInfo, colorRange, config);
    }
    var x,
        y = d3.scaleLinear().range([height, 0]),
        z = d3.scaleOrdinal()
            .range(colorRange);

    if (config.type == 1) {
        x = d3.scaleLinear().range([0, width]);
    } else {
        x = d3.scalePoint().range([0, width]);
    }

    var line = d3.line()
        .x(function (d) {
            return x(d[xAxis]);
        })
        .y(function (d) {
            return y(d[yAxis]);
        });
    var columns = Object.keys(columnsInfo);
    var groupData = columns.map(function (id) {
        return {
            id: id,
            values: data.filter(function (d, i) {
                // CBT: remove last blank or value is 0 data to show only that much of line
                if ((d[id] != 0 && d[id] != null && d[id] != undefined) || i == 0) return d;
            }).map(function (d, i) {
                var tempObj = {};
                tempObj[xAxis] = d[xAxis];
                tempObj[yAxis] = d[id];
                return tempObj;
            })
        };
    });

    if (config.type == 1) { // primary line chart
        x.domain([config.startX, config.endX]);
    } else { // secondary line chart
        x.domain(config.months);
    }

    y.domain([
        d3.min(groupData, function (c) {
            return d3.min(c.values, function (d) {
                return d[yAxis];
            });
        }),
        d3.max(groupData, function (c) {
            return d3.max(c.values, function (d) {
                return d[yAxis];
            });
        })
    ]);

    z.domain(groupData.map(function (c) {
        return c.id;
    }));
    
    if (config.type == 1) { // primary line chart
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickValues(config.years).tickFormat(d3.format("d")))
            .append("text")
            .attr("x", width / 2)
            .attr("y", margin.bottom * 0.9)
            .attr("dx", "0.32em")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "start")
            .text(label.xAxis);
    } else { // secondary line chart
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickValues(config.months))
            .append("text")
            .attr("x", width / 2)
            .attr("y", margin.bottom * 0.9)
            .attr("dx", "0.32em")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "start")
            .text(label.xAxis);
    }

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("y", -10)
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .text(label.yAxis);

    var city = g.selectAll(".city")
        .data(groupData)
        .enter().append("g")
        .attr("class", "city");
  
    city.append("path")
        .attr("class", "line")
        .attr("d", function (d) {
            return line(d.values);
        })
        .style("stroke", function (d) {
            return z(d.id);
        }).style("fill", "none").style("stroke-width", "4px");
  
    // CBT: for wicket Circles in multiseries line chart
    var circleRadius = 5;
    var keys = Object.keys(columnsInfo);
    var element = g.append("g")
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d) {
            return "translate(" + x(d[xAxis]) + ",0)";
        });
  
    var circles = element.selectAll("circle")
        .data(function (d) {
            return keys.map(function (key) {
            return { key: key, value: d[key], over: d.over };
            });
        })
        .enter().append("circle")
        .attr("cx", function (d) {
            return 0;
        })
        .attr("cy", function (d) {
            return y(d.value);
        })
        .attr("r", circleRadius)
        .attr("fill", "#fff")
        .attr("stroke", function (d) {
            if (d.circles == undefined || d.circles.length <= 0) {
                return "#000";
            } else {
                return z(d.key);
            }
        })
        .attr("data", function (d) {
            var data = {};
            data["over"] = d.over;
            data["runs"] = d.value;
            return JSON.stringify(data);
        })
        .attr("stroke-width", "2px")
        .attr("fill-opacity", function (d) {
            return 1.0;
        })
        .attr("stroke-opacity", function (d) {
            return 1.0;
        });
    
    circles.on("click", function(d) {
        if (d.key == "indonesia" && config.type == 1) { // primary line chart
            config.callback(d.over);
        }
    });

    circles.on("mouseover", function (d) {
        if (d.key == "indonesia" && config.type == 1) { // primary line chart
            d3.select(this).style("cursor", "pointer");
        }

        var currentEl = d3.select(this);
        currentEl.attr("r", 7);
        var fadeInSpeed = 120;
        d3.select("#circletooltip_" + mainDivName)
            .transition()
            .duration(fadeInSpeed)
            .style("opacity", function () {
            return 1;
            });
        d3.select("#circletooltip_" + mainDivName).attr("transform", function (d) {
            var mouseCoords = d3.mouse(this.parentNode);
            var xCo = 0;
            if (mouseCoords[0] + 10 >= width * 0.80) {
            xCo = mouseCoords[0] - parseFloat(d3.selectAll("#circletooltipRect_" + mainDivName)
                .attr("width"));
            } else {
            xCo = mouseCoords[0] + 10;
            }
            var x = xCo;
            var yCo = 0;
            if (mouseCoords[0] + 10 >= width * 0.80) {
            yCo = mouseCoords[1] + 10;
            } else {
            yCo = mouseCoords[1];
            }
            var x = xCo;
            var y = yCo;
            return "translate(" + x + "," + y + ")";
        });
      
        //CBT: calculate tooltips text
        var tooltipData = JSON.parse(currentEl.attr("data"));
        var tooltipsText = "";
        d3.selectAll("#circletooltipText_" + mainDivName).text("");
        var yPos = 0;
        d3.selectAll("#circletooltipText_" + mainDivName).append("tspan").attr("x", 0).attr("y", yPos * 10).attr("dy", "1.9em").text(label.xAxis + ":  " + tooltipData.over);
        yPos = yPos + 1;
        d3.selectAll("#circletooltipText_" + mainDivName).append("tspan").attr("x", 0).attr("y", yPos * 10).attr("dy", "1.9em").text(label.yAxis + ":  " + tooltipData.runs);
        
        //CBT: calculate width of the text based on characters
        var dims = helpers.getDimensions("circletooltipText_" + mainDivName);
        d3.selectAll("#circletooltipText_" + mainDivName + " tspan")
            .attr("x", dims.w + 4);
    
        d3.selectAll("#circletooltipRect_" + mainDivName)
            .attr("width", dims.w + 10)
            .attr("height", dims.h + 20);
    });

    circles.on("mousemove", function () {
        var currentEl = d3.select(this);
        currentEl.attr("r", 7);
        d3.selectAll("#circletooltip_" + mainDivName)
            .attr("transform", function (d) {
            var mouseCoords = d3.mouse(this.parentNode);
            var xCo = 0;
            if (mouseCoords[0] + 10 >= width * 0.80) {
                xCo = mouseCoords[0] - parseFloat(d3.selectAll("#circletooltipRect_" + mainDivName)
                .attr("width"));
            } else {
                xCo = mouseCoords[0] + 10;
            }
            var x = xCo;
            var yCo = 0;
            if (mouseCoords[0] + 10 >= width * 0.80) {
                yCo = mouseCoords[1] + 10;
            } else {
                yCo = mouseCoords[1];
            }
            var x = xCo;
            var y = yCo;
            return "translate(" + x + "," + y + ")";
        });
    });

    circles.on("mouseout", function () {
        var currentEl = d3.select(this);
        currentEl.attr("r", 5);
        d3.select("#circletooltip_" + mainDivName)
            .style("opacity", function () {
            return 0;
            })
            .attr("transform", function (d, i) {
            // klutzy, but it accounts for tooltip padding which could push it onscreen
            var x = -500;
            var y = -500;
            return "translate(" + x + "," + y + ")";
            });
    });
  
    var circleTooltipg = g.append("g")
        .attr("font-family", "'Roboto', sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
        .attr("id", "circletooltip_" + mainDivName)
        .attr("style", "opacity:0")
        .attr("transform", "translate(-500,-500)");
  
    circleTooltipg.append("rect")
        .attr("id", "circletooltipRect_" + mainDivName)
        .attr("x", 0)
        .attr("width", 120)
        .attr("height", 80)
        .attr("opacity", 0.71)
        .style("fill", "#000000");
  
    circleTooltipg
        .append("text")
        .attr("id", "circletooltipText_" + mainDivName)
        .attr("x", 30)
        .attr("y", 15)
        .attr("fill", function () {
            return "#fff"
        })
        .style("font-size", function (d) {
            return 10;
        })
        .style("font-family", function (d) {
            return "'Roboto', sans-serif";
        })
        .text(function (d, i) {
            return "";
        });
    }

    var helpers = {
        getDimensions: function (id) {
            var el = document.getElementById(id);
            var w = 0, h = 0;
            if (el) {
                var dimensions = el.getBBox();
                w = dimensions.width;
                h = dimensions.height;
            } else {
                console.log("error: getDimensions() " + id + " not found.");
            }
            return { 
                w: w, 
                h: h 
            };
        }
    };
