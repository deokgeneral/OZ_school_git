function question(age1, age2) {
    // 여기에서 코드 작성해주세요!
    let result;

    if(age1 === age2){
        result = '너 내 동료가 돼라!'
      }else{
        result = '너 내 도돋.도도돋돋..도독...'
      }
    return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
    question,
    [
        [13, 13],
        [14, 17],
        [32, 32],
        [24, 24],
        [19, 17],
        [20, 21],
    ],
    [
        '너 내 동료가 돼라!',
        '너 내 도도도도독...',
        '너 내 동료가 돼라!',
        '너 내 동료가 돼라!',
        '너 내 도도도도독...',
        '너 내 도도도도독...',
    ]
);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = question(...conditions[index]) === results[index];
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}