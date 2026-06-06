// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "WX9WTF-EM28rs-WRBT364";

// Grid layout desired
var layout_cols = 5;
var layout_rows = 4;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "FF0000",
    "Load Cfg",
    "",
    "1",
    "R"
  ],
  [
    "#ff0000",
    "Load Cfg",
    "#",
    1,
    "L"
  ],
  [
    "#2196f3",
    "CLUBLOG",
    "https://clublog.org/livestream/WX9WTF",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "Hamclock",
    "http://192.168.50.238:8081/live.html",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/38.8/-94.55",
    1,
    "R"
  ],
  [
    "#2196f3",
    "PISTAR",
    "http://192.168.50.97/",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=38.77147,-94.55083&zoom=6&alertTableFilterProv=ON",
    1,
    "R"
  ],
  [
    "#2196f3",
    "TIME.IS",
    "https://time.is/",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=38.7714&lon=-94.5508&zoom=5",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-94.55,38.77,2000",
    1,
    "R"
  ],
  [
    "#fe7301",
    "WeatherStar 4000",
    "http://192.168.50.128:8080/?hazards-checkbox=true&current-weather-checkbox=true&latest-observations-checkbox=true&hourly-checkbox=false&hourly-graph-checkbox=true&travel-checkbox=false&regional-forecast-checkbox=true&local-forecast-checkbox=true&extended-forecast-checkbox=true&almanac-checkbox=true&spc-outlook-checkbox=true&radar-checkbox=true&settings-wide-checkbox=false&settings-kiosk-checkbox=true&settings-scanLines-checkbox=true&settings-speed-select=1.00&settings-units-select=us&settings-mediaVolume-select=0.25&latLonQuery=64012%2C+Belton%2C+MO%2C+USA&latLon=%7B%22lat%22%3A38.7995%2C%22lon%22%3A-94.5348%7D",
    1,
    ""
  ],
  [
    "#2196f3",
    "EDIS Event Map",
    "https://rsoe-edis.org/eventMap",
    1,
    "R"
  ],
  [
    "#2196f3",
    "MoDot Traveler Map",
    "https://traveler.modot.org/map/",
    1,
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "http://www.spc.noaa.gov/products/spcrss.xml",
    30
  ],
  [
    "https://www.weather.gov/rss_page.php?site_name=eax",
    30
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    [
      "Satellite - National",
      "Satellite - Regional"
    ],
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/GOES16-CONUS-GEOCOLOR-625x375.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/umv/GEOCOLOR/GOES16-UMV-GEOCOLOR-600x600.gif"
  ],
  [
    [
      "Radar - National",
      "Radar - Regional"
    ],
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
    "https://radar.weather.gov/ridge/standard/KEAX_loop.gif"
  ],
  [
    "",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif"
  ],
  [
    [
      "SPC - Current Loop",
      "SPC - Day 2 Outlook",
      "SPC - Day 3 Outlook",
      "SPC - Days 4-8",
      "SPC - Thunderstorm Outlook"
    ],
    "https://www.spc.noaa.gov/products/activity_loop.gif",
    "https://www.spc.noaa.gov/products/outlook/day2otlk_1730.png",
    "https://www.spc.noaa.gov/products/outlook/day3otlk_1930.png",
    "https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif",
    "https://www.spc.noaa.gov/products/exper/enhtstm/imgs/enh_2000.gif"
  ],
  [
    "",
    "https://services.swpc.noaa.gov/experimental/images/aurora_dashboard/tonights_static_viewline_forecast.png"
  ],
  [
    [
      "NHC - Atlantic",
      "NHC - Pacific"
    ],
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_pac_7d0.png"
  ],
  [
    [
      "Lightning - National",
      "Lightning - Regional",
      "Lightning - Local"
    ],
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    "https://images.lightningmaps.org/blitzortung/america/index.php?map=oklahoma_kansas",
    "iframe|https://map.blitzortung.org/#9/38.77/-94.65"
  ],
  [
    "CoCoRaHS",
    "https://www.cocorahs.org/Maps/GetMap.aspx?state=MO&county=CS&type=precip"
  ],
  [
    "BELTO49",
    "http://www.findu.com/cgi-bin/twp67.cgi?call=WX9WTF&units=english&led=0"
  ],
  [
    "",
    "iframe|http://192.168.50.128:8080/?hazards-checkbox=true&current-weather-checkbox=true&latest-observations-checkbox=true&hourly-checkbox=false&hourly-graph-checkbox=true&travel-checkbox=false&regional-forecast-checkbox=true&local-forecast-checkbox=true&extended-forecast-checkbox=true&almanac-checkbox=true&spc-outlook-checkbox=true&radar-checkbox=true&settings-wide-checkbox=false&settings-kiosk-checkbox=true&settings-scanLines-checkbox=true&settings-speed-select=1.00&settings-units-select=us&settings-mediaVolume-select=0.25&latLonQuery=64012%2C+Belton%2C+MO%2C+USA&latLon=%7B%22lat%22%3A38.7995%2C%22lon%22%3A-94.5348%7D"
  ],
  [
    [
      "Boone Cam"
    ],
    "https://stream.resortcams.com/thumbnail?application=live&streamname=kingstreet.stream&size=1280x720"
  ],
  [
    "ADSB",
    "iframe|https://globe.adsbexchange.com/?feed=5LclYVcAzhtU"
  ],
  [
    "2-Day Hourly",
    "https://forecast.weather.gov/meteograms/Plotter.php?lat=38.771&lon=-94.55&wfo=EAX&zcode=MOZ043&gset=18&gdiff=3&unit=0&tinfo=CY6&ahour=0&pcmd=11101111110000000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6"
  ],
  [
    "APRS",
    "iframe|https://aprs.fi/#!lat=38.7715&lng=-94.55083"
  ],
  [
    "Fox Weather Stream",
    "iframe|https://www.youtube-nocookie.com/embed/wt6SIE7BXS8?autoplay=1&mute=1"
  ],
  [
    "",
    ""
  ],
  [
    "",
    ""
  ],
  [
    [
      "I-49 S @ N of 163rd Street",
      "I-49 N @ 58 Hwy",
      "I-49 N @ Hwy J",
      "I-49 S @ S of Mo-2"
    ],
    "https://imgproxy.windy.com/_/full/plain/current/1648674067/original.jpg",
    "https://imgproxy.windy.com/_/full/plain/current/1648674007/original.jpg",
    "https://imgproxy.windy.com/_/full/plain/current/1648676489/original.jpg",
    "https://imgproxy.windy.com/_/full/plain/current/1648676520/original.jpg"
  ],
  [
    [
      "",
      "",
      "",
      ""
    ],
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CDT&sector=CENTMISSVLY&element=pop12&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CDT&sector=CENTMISSVLY&element=totalsvrprob&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CDT&sector=CENTMISSVLY&element=convoutlook&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CDT&sector=CENTMISSVLY&element=sky&n=4"
  ],
  [
    "Space Weather Stream",
    "iframe|https://www.youtube-nocookie.com/embed/ToUVD_JdKvM?autoplay=1&mute=1"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  10000,
  10000,
  0,
  7500,
  0,
  10000,
  10000,
  30000,
  0,
  0,
  10000,
  0,
  5000,
  0,
  0,
  5000,
  5000,
  5000,
  5000,
  0
];

// CUT END
