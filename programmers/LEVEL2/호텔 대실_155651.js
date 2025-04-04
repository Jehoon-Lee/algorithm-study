function solution(book_time) {
  let roomList = [];

  //HH:MM 을 분으로 변환
  const timetoMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  //분으로 변환한 book_time 리턴
  const bookMinutesList = book_time.map((time) => {
    const [start, end] = time;
    //퇴실시간+10분 미리 더해서 계산
    return [timetoMinutes(start), timetoMinutes(end) + 10];
  });

  //오름차순 정렬 후 시작시간, 종료시간 추출
  for (const [start, end] of bookMinutesList.sort((a, b) => a[0] - b[0])) {
    //비어있는 방번호 찾기
    const emptyRoomIndex = roomList.findIndex((room) => {
      return room <= start; //return 써줘야 반환됨 (return안쓸거면 괄호제거)
    });
    //방이 존재하지 않으면 종료시간 Push
    if (emptyRoomIndex === -1) {
      roomList.push(end);
    } else {
      //방이 존재하면 종료시간 업데이트
      roomList[emptyRoomIndex] = end;
    }
  }
  return roomList.length;
}
