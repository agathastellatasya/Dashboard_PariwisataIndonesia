/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_indonesiaHigh;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#a1dd70");

// Exclude
polygonSeries.exclude = ["BN", "TL", "MY-12", "MY-13"];

// Disable drag and zoom
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;
chart.chartContainer.wheelable = false;
chart.maxZoomLevel = 1;

//Create image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 7;
circle.fill = am4core.color("#FF0000");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
circle.tooltipText = "{title}";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data
imageSeries.data = [{
  "latitude": -7.607805,
  "longitude": 110.203751,
  "title": "Candi Boroudur",
  "description": "Dulunya, Candi Borobudur ditemukan oleh Raffles saat dia menjajah Indonesia. Gubernur Jenderal Inggirs ini pun menuliskan penemuannya dalam bukunya yang berjudul The History Of Java.<br><br> Raffles sendiri mengartikan Borobudur dalam 3 versi nama, Borobudur yang bermakna Buddha Agung (Boro=Agung, Budur=Buddha), sebagai tempat kuno (Boro=nama daerah, Budur=kuno), dan berarti banyak Buddha (Boro=Banyak, Buddur=Buddha). Lain halnya dengan Raffles, situs Direktorat Jendral Kementrian Pendidikan dan Kebudayaan mengartikan lain, sebagai pohon kehidupan yang subur di sekitar candi.<br><br> Candi Borobudur tertelak di tempat yang strategis dengan diapit oleh beberapa gunung seperti Gunung Merapi, Gunung Merbabu, Gunung Sindoro, Gunung Sumbing, dan Pegunungan Menoreh. Selain itu, Candi Borobudur di kelilingi dua sungai yaitu Sungai Progo dan Elo. Banyak orang yang belum tahu, ternyata tumpukan batu yang menyusun Candi Borobudur terbuat dari balok vulkanik yang disusun tanpa bahan perekat. Total reliefnya sendiri berjumlah 2672 dari 1212 relief dekoratif dan 1460 relief kisah."
}, {
  "latitude": -2.8992914,
  "longitude": 107.3535613,
  "title": "Belitung",
  "description": "Nama belitung mulanya disebut dengan Kau-Lan. Penduduk asli Belitung, adalah keturuanan Mongol. Sejarah dinasti Yuan telah mencatat sebuah kisah pelayaran armada Mongol yang dipimping oleh Shi Bi, Ike Mese dan Gao Xing untuk menaklukkan Jawa atas perintah kaisar Kubilai Khan pada tahun 1292.<br><br> Di luar kisah sejarah tersebut, ada fakta menarik yang perlu Kamu tahu. Belitung ternyata merupakan pulau penghasil timah terbesar di Indonesia. John Francois Loudon merupakan orang Belanda pertama yang di percaya oleh Prins Hendrik yang menemukan dan merintis penambangan timah Belanada di Belitung pada tahun 1851. Penambangan timah pertama kali ada di sungai Siburik dan Air Lesung Batang. <br><br> Lalu, ada yang menarik lagi. Kamu tahu, ternyata Pulau Belitung merupakan penghasil batu Satam Hitam satu-satunya di dunia. Batu ini terbentuk dari proses alam atas reaksi tabrakan meteor dengan lapisan bumi yang mengandung timah jutaan tahun lalu."
}, {
  "latitude": -7.9424931,
  "longitude": 112.9355026,
  "title": "Gunung Bromo",
  "description": "Menurut sejarah, Gunung Bromo, dulunya adalah Gunung Tengger. Letusan kecil yang terjadi di Gunung Bromo berakibat munculnya kaldera besar dengan diameter sekitar 8 km. Kedalaman kaldera ini membuat materi vulkanik terkebak di dalamnya. Nah akibat dari letusan ini juga terbentuk lorong magma yang kemudian memunculkan deretan gunung lain di antaranya Gunung Widodaren, Gunung Watangan, Gunung Kursi, Gunung Batok dan Gunung Bromo. Gunung Bromo sendiri masuk dalam kawasan Tengger dihuni oleh suku asli yang dijuluki Suku Tengger. Penghuni asli dataran Bromo ini juga ternyata punya fakta unik yang nggak banyak diketahui orang. Kalau merunut cerita yang diyakini masyarakat, ada seorang pewaris aktif tradisi lisan dari Orang Tengger. Orang ini disebut sebagai Dukun Tengger. Menurut Dukun Tengger ini, mereka yang disebut sebagai orang Tengger adalah keturunan dari para pengungsi Majapahit. <br><br> Uniknya, Orang Tengger menganggap Gunung Bromo merupakan gunung yang dianggap sebagai Gunung Suci, khususnya oleh Suku Tengger. Mereka menggangap Gunung Bromo sebagai Gunung Brahma. Maka, gunung ini disucikan oleh Orang Tengger. <br><br> Setiap tahunnya di gunung ini digelar upacara Yadnya Kasada atau Kasodo. Biasanya upacara ini di gelar di sebuah pura yang berada di bawah kaki Gunung Bromo dan dilanjutkan ke puncak Bromo. Upacaradiadakan pada tengah malam hingga dini hari setiap bulan purnama sekitar tanggal 14 atau 15 di bulan Kasodo (kesepuluh) menurut penanggalan Jawa."
}, {
  "latitude": -8.4493925,
  "longitude": 119.8292078,
  "title": "Labuan Bajo",
  "description": "Labuan Bajo adalah sebuah desa dari 9 desa di Kecamatan Komodo, Kabupaten Manggarai Barat, NTT. Dulu, Desa Labuan Bajo menjadi Ibukota Kecamatan dan Ibukota Kabupaten, namun sekarang menjadi Kota Labuan Bajo Labuan bajo berasal dari kata Labuan yang berarti ‘tempat berlabuh’ dan Bajo dari kata ‘suku Bajo’. Menurut kisah daerah, Labuan Bajo dulunya adalah tempat di mana Suku Bajo berpindah dari Flores. <br><br> Di Labuan Bajo terdapat puluhan destinasi wisata yang epic dan bertaraf internasional. Salah satunya adalah Tanaman Nasional Komodo, Pantai Pede, Pantai Gorontalo,Gua Batu Cermin, Pulau Bidadari, Kanawa, Pulau Wae Lulu, hingga Puncak Waringin. <br><br> Meskipun hanya desa, namun Labuan Bajo memiliki Bandara Internasional yang terletak di Kota Labuan Bajo, Provinsi Kepulauan Flores. Uniknya, Labuan Bajo memiliki pantai berpasir pink yang hanya ada 8 di dunia."
}, {
  "latitude": 2.6107298,
  "longitude": 98.5557708,
  "title": "Danau Toba",
  "description": "Danau Toba adalah danau vulkanik terbesar di Indonesia, bahkan Asia Tenggara. Danau yang terletak di Sumatera Utara ini memiliki luas 1.145 km persegi dan kedalaan sekitar 450 meter. Di tengah danau terdapat pulau Vulkanik bernama Pulau Samosir dengan tinggi 1000 mdpl. Ketinggiannya ini membuatnya terlihat seperti gunung saat dilihat dari kejauhan. <br><br> Peneliti meyakini bahwa pembentukan Danau Vulkanik ini terbentuk karena letusan yang terjadi pada 78 ribu tahun lalu yang menghancurkan daerah sekitarnya, lalu terbentuklah sebuah kaldera yang saat ini berubah menjadi sebuah danau bernama Danau Toba. <br><br> Gunung Toba ini tergolong Supervolcano. Hal ini dikarenakan Gunung Toba memiliki kantong magma yang sangat besar yang jika meletus kalderanya besar sekali. Volcano biasa rata-rata kalderanya ratusan meter, sedangkan Supervolcano dapat mencapai puluhan kilometer. <br><br> Rencananya, pemerintah akan membangun Taman Bunga Nusantara di kawasan Danau Toba di area seluas 150-200 hektar supaya semakin banyak wisatawan yang datang ke tempat ini. Nah, untuk mempermudah akses ke sana, pemerintah akan membangun jalur kereta api sepanjang 30 km dari Medan ke Danau Toba."
}, {
  "latitude": -5.6121738,
  "longitude": 106.3368001,
  "title": "Kepulauan Seribu",
  "description": "Kepulauan yang masuk dalam wilayah administrasi Jakarta ini ternyata punya ratusan gugus pulau. Jumlah pulau yang ada dalam kawasan Kepulauan Seribu mencapai 342 pulau dengan luas mencapai 8,7 km persegi. <br><br> Beberapa pulau yang lokasinya lebih dekat ke Jakarta memang memiliki beberapa peninggalan bersejarah, seperti reruntuhan benteng, sisa reruntuhan rumah sakit yang dulu digunakan untuk karantina haji, dan beberapa makam kuno. <br><br> Bahkan, beberapa pulau pun didaulat sebagai cagar bidaya seperti Pulau Kelor, Pulau Cipir, dan Pulau Onrust. Di Pulau Kelor misalnya, Kamu bisa menemukan galangan kapal dan benteng Martello yang dibangun VOC untuk menghadapi serangan Portugis di abad ke 17. <br><br> Yang nggak banyak orang tahu, Kawasan Kepulauan Seribu ternyata adalah bagian dari taman nasional Kepulauan Seribu (TNKpS).  Terdapat empat ekosistem utama pembentuk sistem ekologis kawasan TNKpS, yaitu: hutan pantai, hutan mangrove, padang lamun dan terumbu karang. <br><br> Uniknya lagi nih, di salah satu pulau di TNKpS ternyata ada akuarium bawah laut. Pulau tersebut adalah Pulau Putri. Meski sebetulnya akuarium ini bukanlah akuarium permanen. Karena sebetulnya akuarium ini adalah perahu dengan bagian bawah terbuat dari kaca. Cukup solutif buat Kamu yang pengen menyelam tapi nggak bisa berenang. <br><br> Meski beberapa pulau sudah ditinggali manusia, tapi ada juga beberapa “pulau gosong” di kawasan TNKpS. Pulau gosong di sini adalah pulau kecil yang luasnya nggak lebih dari 100 meter dan hanya berupa hamparan pasir dan karang. Dan nggak berwarna hitam sama sekali."
}, {
  "latitude": -8.5995152,
  "longitude": 116.1374904,
  "title": "Mandalika",
  "description": "Mandalika adalah sebuah daerah di Lombok yang menjadi Kawasan Ekonomi Khusus (KEK). Sejak tahun 2015 yang gencar melakukan pembangunan baik jalan lintas, listrik, air, dan kawasan Ekonomi dan Industri. <br><br> Mandalika bakal memiliki Sirkui Balapan MOTO GP bertaraf Internasional yang diperkirakan akan menghabiskan dana sebesar Rp 6 Triliun. Sirkuit Balapan ini akan menjadi sirkuit pertama di dunia yang menawarkan keindahan pesona alam indah, solar cell farm, lapangan golf, area komersial, dan pemandangan Samudra Hindia. Pemerintah akan sulap Mandalika menjadi layaknya Nusa Dua Bali di tahun 2018. Perubahan Mandalika ini diperkuat dengan adanya beragam pantai Indah di Mandalika yang mirip Bali, seperti Pantai Gepuruk, Serenting, Pantai Tanjung, hingga Pantai Aan. <br><br> Nama Mandalika dipercaya berasal dari kisah daerah yang menceritakan tentang kisah seorang putri bernama Putri Mandalika yang berubah menjadi makhluk bernama Nyale karena tidak ingin dipersunting oleh seorang pangeran. Ia tidak ingin menjadi perebutan para pangeran dan menimbulkan peperangan, sehingga ia memutukan untuk mencebutkan diri ke laut dan berubah menjadi Nyale agar para pangeran tidak melakukan perang."
}, {
  "latitude": -5.689304,
  "longitude": 123.4819461,
  "title": "Kepulauan Wakatobi",
  "description": "Kecantikan bawah laut Wakatobi sudah terkenal sampai mancanegara. Wakatobi bahkan pernah masuk dalam Ajang Pameran Pariwisata Terbesar ITB Berlin (Internationale Tourismus-Börse Berlin). ITB sendiri merupakan pasar pariwisata terbesar yang diikuti oleh berbagai perusahaan pariwisata di dunia, mulai dari hotel, tourist boards, tour operator, system providers, penerbangan dan perusahaan penyewaan mobil. <br><br> Di perairan laut Wakatobi, setidaknya ada 5 jenis paus yang hidup di dalamnya yaitu Beaked Whale, Pilot Whale, Sperm Whale, Bryde’s Whale dan Melonhead Whale. Nggak cuma itu aja gais ternyata, selain miliki 5 jenis paus ada juga 6 jenis lumba-lumba yang hidup di sini. Di antaranya adalah Bottlenoose Dolphin, Lumba-lumba kepala bundar, Risso Dolphin, Spinner Dolphin, dan Spotted Dolphin. Maka nggak salah kalau Wakatobi digadang-gadang bisa menggeser Bali. <br><br> Hebatnya lagi, tak kurang dari 70 persen dari total spesies karang atau coral di dunia berada di dasar laut Wakatobi. Bayangkan saja, di kedalaman Wakatobi ternyata ada 396 spesies karang yang terdiri dari 31 spesies karang fungi (mushroom), 10 spesies karang keras non scleractinia atau ahermatipic, 28 jenis karang lunak, dan sisanya adalah karang Scleractinia hermatipic. Selain karang, paus dan juga lumba-lumba ada juga 590 spesies ikan yang hidup di perairan Wakatobi. <br><br> Kamu nggak akan menyangka bahwa Wakatobi berada di jantung segitiga terumbu karang dunia ( coral triangle). Coba deh sekarang Kamu buka peta dunia. Kamu pasti akan melihat wilayah perairan yang mencakup negara-negara yang masuk dalam wilayah perairan segitiga emas. Terbentang dari Thailand, Malaysia, Philiphina, Indonesia (Bunaken, Wakatobi, Bali, dan Lombok), Timor Leste, Papua Nugini dan berakhir di Pulau Solomon. Dan Wakatobi, tepat berada di jantung (pusat) segitiga tersebut. Waw, keren banget kan ternyata Wakatobi ini?"
}, {
  "latitude": -6.4790227,
  "longitude": 105.6537051,
  "title": "Tanjung Lesung",
  "description": "Dahsyatnya letusan Krakatau diyakini pernah meluluhlantahkan pesisir barat Banten. Bahkan ada penyusuran pada peta-peta kuno Belanda dan jurnal-jurnal akademik seperti ‘Marine Geology’, ‘GeoJournal’, ‘Journal of Vulcanology & Geothermal Research’ yang menyatakan adanya perubahan pada beberapa titik. Dan titik perubahan tersebut berada di area Teluk Slamadarang dan Tanjung Lesung. <br><br> Akibat letusan Krakatau lebih dari seabad lalu, membuat kawasan Tanjung Lesung memiliki kekayaan hayati yang luar biasa. Baik di darat atau pun di bawah laut. Bahkan nih, para ilmuwan dari seluruh dunia masih datang untuk melakukan penelitian tentang kekayaan vulkanik pantai Jawa Barat dan sekitarnya yang masih alami. <br><br> Kawasan pantai Tanjung Lesung memiliki luas sekita 15 hektare. Dari keseluruhan luas area ini, Kamu bisa melakukan berbagai aktifitas outdoor, baik yang berbayar ataupun yang gratis."
}, {
  "latitude": 2.3037655,
  "longitude": 128.1293305,
  "title": "Pulau Morotai",
  "description": "Pada abad ke-15 jayalah sebuah kerajaan Moro yang berpusat di Mamuya. Sekarang wilayah itu masuk dalam kecamatan Galela, Halmahera Utara. Daratan hingga dasar perairan di Morotai menguak sebuah bukti Perang Dunia II yang menyimpan bangunan fisik dan sisa-sisa peralatan perang yang pernah terjadi di sana. <br><br> Sejarah yang paling populer adalah “Battle of Morotai” yang merupakan perang antara Amerika Serkat dengan Jepang. Perang tersebut akhirnya menyisakan pangkalan militer laut dan udara di dekat Daruba, Ibu kota kabupaten Morotai yang dibangun pada September 1944. <br><br> Sisa barang bukti Perang Dunia II di Morotai sampai sekarang masih tersimpan. Kamu bisa menikmati sisa peperangan yang tersimpan di dasar laut berupa bangkai pesawat Bristol Beufort dengan panjag sayap 20 meter. Tak hanya warisan Perang Dunia II, Morotai miliki 35 pulau kecil dan 2 pulau besar yang memesona. <br><br> Contohnya seperti Pulau Koloray dan pulau Zumzum yang menawan. Saat berada Kamu bakal merasa sangat kepanasan. Nah, saking panasnya, Pulau Morotai dijuluki sebagai pulau 3 matahari. <br><br> Uniknya, meskipun sebagian besar wilayahnya adalah lautan, Kamu pun bisa menemukan kerajinan besi putih dan aneka perhiasan dari sisa besi pada masa PD II."
}];

circle.events.on("hit", function(ev) {
  var data = ev.target.dataItem.dataContext;
  console.log(data);
  var info = document.getElementById("info");
  info.innerHTML = "<h3>" + data.title + "</h3>";
  if (data.description) {
    info.innerHTML += data.description;
  }
  else {
    info.innerHTML += "<i>No description provided.</i>"
  }
});
