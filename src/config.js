const config = {
  style: 'mapbox://styles/isnot/ckdzfj1n70ee219lhgygiamwc',
  accessToken: 'pk.eyJ1IjoiaXNub3QiLCJhIjoiY2tscDdpeGExMHp5cTJwcXI0YWlzZHdyeCJ9._NooEseBc8wEwa3z_plcAg',
  showMarkers: true,
  markerColor: '#3FB1CE',
  theme: 'light',
  use3dTerrain: true,
  title: 'VisitSuzugamori 第14旅 ほんとうに都内',
  subtitle: '【14】青梅 奥多摩 鳩の巣 白丸ダム 小河内ダム もえぎの湯',
  byline: 'By isnot',
  footer: 'Source: (c) 石坂 ケンタ, KADOKAWA, 電撃マオウ, Mapbox',
  chapters: [
    {
      id: 'tj14-tokyo-station-akarenga',
      alignment: 'left',
      hidden: false,
      title: '東京駅 丸の内中央改札口 赤煉瓦ドーム',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Tokyo_Station_2012_09.jpg/640px-Tokyo_Station_2012_09.jpg',
      description: '4巻P93 ん〜 久々の 旅だ〜っ！ http://www.tokyostationcity.com/learning/station_building/',
      location: {
        center: [139.76733857670646, 35.68242691678407],
        zoom: 8.5,
        pitch: 60,
        bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },
    {
      id: 'tj14-tachikawa-station',
      alignment: 'right',
      hidden: false,
      title: '立川駅 5番線ホーム？',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JR_Tachikawa_Station_Platform_7%E3%83%BB8.jpg/640px-JR_Tachikawa_Station_Platform_7%E3%83%BB8.jpg',
      description: '4巻P96 思ったより遠いっ！ https://www.jreast.co.jp/estation/stations/958.html',
      location: {
        center: [139.41377258216218, 35.69919805437275],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-oume-station',
      alignment: 'right',
      hidden: false,
      title: '青梅駅 2番線ホーム',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/JREast-Ome-line-Ome-station-platform.jpg/640px-JREast-Ome-line-Ome-station-platform.jpg',
      description: '4巻P97 山が見えてきた！ ここで乗り換え https://www.jreast.co.jp/estation/stations/303.html',
      location: {
        center: [139.2585289882575, 35.7924280100388],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-hatonosu-station',
      alignment: 'right',
      hidden: false,
      title: '鳩ノ巣駅',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hatonosu_Station.jpg/640px-Hatonosu_Station.jpg',
      description: '4巻P98 ん〜 降りて正解っ https://www.jreast.co.jp/estation/stations/1237.html',
      location: {
        center: [139.12910364231746, 35.81635174381542],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-hatonosu-tunnel',
      alignment: 'right',
      hidden: false,
      title: '鳩ノ巣トンネル はとのすはし',
      // image: './path/to/image/source.png',
      description: '4巻P99 ',
      location: {
        center: [139.127918, 35.814444],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-shiromaru-dam',
      alignment: 'right',
      hidden: false,
      title: '白丸調整池ダム',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shiromaru_Dam_and_lake.jpg/640px-Shiromaru_Dam_and_lake.jpg',
      description: '4巻P100 ',
      location: {
        center: [139.12404160800034, 35.811274917674254],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-kazuma-tunnel',
      alignment: 'right',
      hidden: false,
      title: '数馬隧道',
      // image: './path/to/image/source.png',
      description: '4巻P101 ',
      location: {
        center: [139.1138905, 35.8085032],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-umisawa-oohashi',
      alignment: 'right',
      hidden: false,
      title: '海沢大橋',
      // image: './path/to/image/source.png',
      description: '4巻P101 ',
      location: {
        center: [139.10847303445985, 35.803369410282215],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-moegi-no-yu',
      alignment: 'right',
      hidden: false,
      title: '奥多摩温泉 もえぎの湯',
      // image: './path/to/image/source.png',
      description: '4巻P102 ',
      location: {
        center: [139.102613, 35.8046162],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-moegi-bashi',
      alignment: 'right',
      hidden: false,
      title: 'もえぎ橋',
      // image: './path/to/image/source.png',
      description: '4巻P105 ',
      location: {
        center: [139.1011388, 35.8057723],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-yamashiroya',
      alignment: 'right',
      hidden: false,
      title: '山城屋 奥多摩わさび本舗',
      // image: './path/to/image/source.png',
      description: '4巻P105 ',
      location: {
        center: [139.099594, 35.806077],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-atago-shrine',
      alignment: 'right',
      hidden: false,
      title: '愛宕神社階段',
      // image: './path/to/image/source.png',
      description: '4巻P107 ',
      location: {
        center: [139.0974752, 35.8048366],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-okutama-station',
      alignment: 'right',
      hidden: false,
      title: '奥多摩駅',
      // image: './path/to/image/source.png',
      description: '4巻P109 https://www.jreast.co.jp/estation/stations/368.html',
      location: {
        center: [139.0969289, 35.8093737],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-lake-okutama',
      alignment: 'right',
      hidden: false,
      title: '奥多摩湖',
      // image: './path/to/image/source.png',
      description: '4巻P110 ',
      location: {
        center: [139.0470929, 35.7894856],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-ogouchi-dam',
      alignment: 'right',
      hidden: false,
      title: '小河内ダム',
      // image: './path/to/image/source.png',
      description: '4巻P110 ',
      location: {
        center: [139.0520349, 35.7894921],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'tj14-kazuma-path',
      alignment: 'right',
      hidden: false,
      title: '数馬の切通し',
      // image: './path/to/image/source.png',
      description: '4巻P117 ',
      location: {
        center: [139.1135257, 35.808468],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    }
  ]
};