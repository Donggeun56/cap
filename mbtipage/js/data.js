const qnaList = [
  {
    q: '1. 친구가 여행계획 세우자고 한다-계획',
    a: [
      { answer: 'a. 어디든 좋아,계획이 뭐가 필요해', type: [0, 8,1,7, 2,10] },
      { answer: 'b. 계획을 세우자', type: [ 3,4, 9, 5] },
      { answer: 'c. 큰 것만 세우고 나머지는 그때 정하자', type: [6, 11 ] },
    ]
  },
  {
    q: '2.여행에서 새로운 사람들을 만났다면? -동행',
    a: [
      { answer: 'a. 바로 먼저 다가간다.', type: [0,  2,7,10] },
      { answer: 'b. 먼저 다가가지는 않지만 다가오면 피하지도 않는다.', type: [1,4, 6, 8] },
      { answer: 'c. 낯선사람은 싫어서 피한다.', type: [3,5,  9, 11] },
    ]
  },
  {
    q: '3. 당신의 여행 이동수단은?-탈것',
    a: [
      { answer: 'a. 어디든 빠르게 갈 수 있는 택시', type: [ 3, 2, 10, 8] },
      { answer: 'b. 버스의 시간을 맞추어 타고간다.', type: [ 7, 5,9] },
      { answer: 'c. 앞에 보이는 것을 타고간다.', type: [0,1, 6, 11, 4] }
    ]
  },
  {
    q: '4. 맘에 드는 멘트는?-숙박',
    a: [
      { answer: 'a. 땅이 침대고 하늘이 이불이다, "잠만 잘 수 있으면 어디든지 좋아" ', type: [1, 2,5 ] },
      { answer: 'b. 깔끔하고 편안한 곳 선호, "몇 성급 호텔에 갈까? " ', type: [4,7,   9, 11 ] },
      { answer: 'c. 그 지역만의 독특한 숙박과 여러가지 숙소를 선호, "오늘은 한옥숙박, 내일은 바다가 보이는 곳" ', type: [0, 3, 6 ,8,10] },
    ]
  },
  {
    q: '5. 여행을 계획중이다. 여행 중 허용할  수 있는 자금의 용량은?-금액',
    a: [
      { answer: 'a. 나의 수입에 따라 적절히 아껴서??', type: [1, 7, 10 ] },
      { answer: 'b. 그래도 여행인데 조금은 더 쓰자', type: [0, 3 ,5, 6,9]},
      { answer: 'c. 어차피 여행인데 왜?? 돈 신경 안써!', type: [2,4,  8,11] },
    ]
  },

  {
    q: '6. 여행 중 빈 시간이 생긴다. 당신은 어떻게 할 것인가? (ex - 1, 2시간)-시간',
    a: [
      { answer: 'a. 너무 빡빡한데 그냥 쉬자', type: [1, 4,  7,11 ] },
      { answer: 'b. 가벼운 놀거리라도 할까?  아니면 근처 볼거리라도 볼래?', type: [0,2,9,  6, 10 ] },
      { answer: 'c. 뭐할지 빨리 정해서 시작하자. 시간아까워', type: [3,   5, 8 ] },
    ]
  },
  {
    q: '7. 친구가 여행 일정을 변경했다-성향',
    a: [
      { answer: 'a. 눈치 못 채고 그냥 따라다닌다.', type: [1, 7, 11 ,10] },
      { answer: 'b. 눈치는 채나 그러려니 한다.', type: [  6,5,9 ,3] },
      { answer: 'c. 나의 의견을 이야기하여 타협점을 찾는다(자기만족 여행)', type: [2,0,4,  8 ] },
    ]
  },
  {
    q: '8. 여행이 도중 음식을 먹어야 된다면?-음식',
    a: [
      { answer: 'a. 배가 고픈 자리에서 근처 음식점에 가서 먹는다.(', type: [1, 0 ] },
      { answer: 'b. 거리대비 가장 맛있는 곳에 가서 먹는다.', type: [3,  6, 5, 10, 8 ] },
      { answer: 'c. 그 지역의 맛집을 무조건 가서 먹어야 한다.', type: [ 4,7,2,9, 11 ] },
    ]
  },
  {
    q: '9. 여행 전날 연락이 끊겼다..-성향',
    a: [
      { answer: 'a. 뭐.. 언젠가 연락 오겠지. 내가 할 일 하며 기다린다', type: [1,2, 7, 0, 11, 9 ,10] },
      { answer: 'b. 초조해서 마음 졸이며 인스타, 페북, 카톡 등 모든 SNS 다 들어가본다.', type: [ 8,5, 6 ] },
      { answer: 'c. 친구에게 연락 올 때까지 무한 카톡, 무한 전화', type: [3,  8, 4 ] },
    ]
  },
  {
    q: '10. 여행 기간에 대한 생각은? -기간',
    a: [
      { answer: 'a. 필요한 곳만 단기간 갔다오자', type: [2,3] },
      { answer: 'b. 흠.. 무난하게 정하지 뭐', type: [0,4, 11, 6,9, 10,5 ] },
      { answer: 'c. 한번 가는데 길게 갔다오자', type: [1, 7,   8 ] },
    ]
  },
  {
    q: '11. 내가 추구하는 활동취향은? -활동성',
    a: [
      { answer: 'a. 각자 할 것 하며, 편안하고 휴식하는 여행이 좋다.', type: [1, 4,7, 9, 11 ] },
      { answer: 'b. 보고싶은 거 보고, 유명한 곳 둘러보는 여행이 좋아.', type: [2, 0,5, 3, 6] },
      { answer: 'c. 활동적으로 여러가지를 체험한다.', type: [ 3, 8 ,10] },
    ]
  }
]


const infoList = [
  {
    name: '여행 뭐 그때그때 대처하면 되죠, 즉흥 여행 재능러 <쥐>',
    desc: '계획을 세우지 않으며 사람들을 좋아하는 스타일! 독특한 숙박을 좋아하며 돈을 많이 쓰지만 않으면 된다. 또한 자기주장이 강하여 의견조율이 필요함. (추천: 관광여행,지역 전통 숙박 여행)'
  },
  {
    name: '추천되어 있는 것 그대로 따라가며 느리고 정직한 여행 스타일 <소>',
    desc: '친구가 세워주는 계획을 따라가는 스타일! 돈을 아끼며 버스를 타고 여행을 다니는 것을 선호한다. 느려도 긴 여행을 좋아하며 휴식과 편안한 분위기를 좋아함. (추천: 기차여행,자전거여행)'
  },
  {
    name: '(먹이감을 찾아 다니듯이) 경치 좋은 곳을 둘러보고 평온한 분위기를 좋아하는 <호랑이>',
    desc: '계획이 없으며 새로운 동행도 좋아함. 단기간여행과 버스보단 빠른 택시를 좋아하고 돈의 제한을 두지 않는다.또한 보는 것을 좋아 하지만 맛있는 음식점을 무조건 가야함.(추천:지역 음식 여행 & 경치 좋은 장소)'
  },
  {
    name: '여기 저기 뛰어다니고 빠르게 이동하는 <토끼>',
    desc: '계획을 세워 단기간에 빠른 택시를 이용하여 여행하는 것을 좋아함. 시간 낭비를 싫어하며 여러가지 활동적인 것을 좋아함. 하지만 새로운 사람들과의 만남은 꺼려함.(추천: 액티비티 여행)'
  },
  {
    name: '돈에 신경 쓰지 않으며 하고 싶은 것을 다 하는 <용>',
    desc: '자신의 계획에서 벗어나는 것을 싫어하며 하고 싶은 것은 돈을 신경쓰지 않고 다 하는 성격. 깔끔하고 청결한 호텔 숙박과 맛집을 선호하며 활동적이지 않은 성향을 가지고 있음(추천: 호캉스) '
  },
  {
    name: '여행가서 무엇을 어떤 비용으로 할 까? , 가성비를 따지는 <뱀>',
    desc: '계획을 세우고 새로운 사람을 싫어하며 되도록 버스타서 돈을 아끼려고 한다. 하지만 쓸 곳이 있으면 쓰는 성격이며 시간을 절약하여 가성비있는 여행을 좋아한다.(추천:가까운 캠핑여행)'
 },
  {
    name: '이런 곳을 예약했어? , 독특한 숙소와 여행을 좋아하는 센스쟁이 <말>',
    desc: '계획을 대략적으로만 세워두며 여행 기간,돈 , 이동 수단 등 그때 그때 상황에 맞추어 결정하는 센스쟁이 스타일. 구경하는 것을 좋아하며 걷는 것도 좋아함.(추천:경치 좋은 곳 )'
  },
  {
    name: '상대방 계힉에 순종적이고 자신의 털 처럼 하얗고 푹신한 호텔 침대를 선호하는 <양>',
    desc: '상대방을 따라다니는 것을 좋아하며 숙소는 좋은 곳을 선호함, 사람들을 좋아함.'
  },
  {
    name: '관광, 먹거리, 액티비티, 모든 것을 하고 싶어하는 <원숭이>',
    desc: '여러 활동적인 것을 좋아하며 빠르게 이동하고 시간 절약하는 것을 좋아함'
  },
  {
    name: '깔끔한 여행과 감성적인 것을 좋아하는 <닭>',
    desc: '감성적인 성격이 있어 운치있는 카페나 미술관 등 구경거리를 좋아함.'
  },
  {
    name: '사람이 좋아! 어울리고 낯을 가리지 않는 <개>',
    desc: '사람들을 좋아하고 어울리는 것을 좋아함. 활동적이며 나머지는 무난한 여행 성격을 가짐. 다른 사람들과 여행가기 편한 스타일.'
  },
  {
    name: '음식을 좋아하며 상대를 배려하는 <돼지>',
    desc: '느긋한 성격이며 빡빡한 여행 스타일을 싫어함, 먹는 것을 잘 채기며 상대방의 배려가 있는 스타일.'
 },
]
