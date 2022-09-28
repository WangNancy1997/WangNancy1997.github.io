// 預設一載入顯示我發起過的團
$(this).load(function(){
    $('.my_activity_card').addClass('display_block')
    $('.my_join_card').addClass('display_none')
    $('.my_like_card').addClass('display_none')

    $('#my_activity > label').addClass('label_hover')
    $('#my_like > label').removeClass('label_hover')
    $('#my_join > label').removeClass('label_hover')
})

// 我發起過的團
$('#my_activity').click(function(){
    $('.my_activity_card').removeClass('display_none')
    $('.my_join_card').addClass('display_none')
    $('.my_like_card').addClass('display_none')

    $('#my_activity > label').addClass('label_hover')
    $('#my_like > label').removeClass('label_hover')
    $('#my_join > label').removeClass('label_hover')
})

// 我報名的團
$('#my_join').click(function(){
    $('.my_activity_card').addClass('display_none')
    $('.my_join_card').removeClass('display_none')
    $('.my_like_card').addClass('display_none')

    $('#my_activity > label').removeClass('label_hover')
    $('#my_like > label').removeClass('label_hover')
    $('#my_join > label').addClass('label_hover')
})


// 我的最愛
$('#my_like').click(function(){
    $('.my_activity_card').addClass('display_none')
    $('.my_join_card').addClass('display_none')
    $('.my_like_card').removeClass('display_none')

    $('#my_activity > label').removeClass('label_hover')
    $('#my_like > label').addClass('label_hover')
    $('#my_join > label').removeClass('label_hover')
})

// // 我發起過的團 動態生成－－－－－－－－－－－－－－－－－－
// // console.log(location.href.substring(44))

// fetch(`http://20.187.74.2/api/Customer_center`,{
//     method:'POST',
//     headers:
//     {
//         "Content-Type": "application/json;charset=utf-8"
//     },
//     body:JSON.stringify(
//         {
//             // 'Local_customer_id':8
//             'Local_customer_id':location.href.substring(44)
//         }
//     )
// })
// .then(function(response) {
//     return response.json()
// })
// .then(function(myJson) {
//     console.log(myJson)
//     // console.log(myJson[0].Attend_data)
//     // 我的最愛
//     // console.log(myJson[0].Like_data)
//     // console.log(myJson[0].Like_data.length == 0)

//     let str = ''
//     if(myJson[0].Post_data.length==0)
//     {
//         document.getElementById("my_activity_card").innerHTML +=
//         `<div class="like_nothing my_activity_card ">
//         <p>目前沒有發起任何文章，發文發起來！</p>
//         </div>`
//         return str
//     }

//     else{
    
//         for(let i = 0;i<myJson[0].Post_data.length;i++)
//          {
//         document.getElementById("my_activity_card").innerHTML +=
//     `
//     <div class="grid-container3 my_activity_card" data-postactivity_id = '${myJson[0].Post_data[i].PostActivity_id}'>
//         <div class="activity_card_box cardleft" id="activity_detail_display_1">
//             <div class="activity_card">
//                 <div class="activity_card_img">
//                     <!-- 點選觀看個人介紹 -->
//                     <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Post_data[i].Customer_img}">   
//                 </div>
//                 <!-- 卡片１ -->
//                 <div class="activity_card_content">
//                     <div class="col">
//                         <div class="row-1">
//                             <p>${myJson[0].Post_data[i].Customer_name}</p>
//                             <div class="row-1_right">
                               
//                                 ${(new Date(myJson[0].Post_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Post_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                              
//                                 <div class="mycard-icon " id="like">
//                                     <i class="fa-solid fa-heart"></i>
//                                     <p>${myJson[0].Post_data[i].Like_count}</p>
//                                 </div>
//                             </div>


//                         </div>
//                         <h3 class="mycard-title">${myJson[0].Post_data[i].Post_title}</h3>

//                         <div class="row-2">
//                             <div class="mycard-icon" id="address">
//                                 <i class="fa-solid fa-location-dot"></i>
//                                 <p>${myJson[0].Post_data[i].AllRegion_id}</p> &emsp;
//                                 <p>${myJson[0].Post_data[i].Place}</p>
//                             </div>

//                             <div class="mycard-icon" id="date">
//                                 <i class="fa-regular fa-clock"></i>
//                                 <p>${myJson[0].Post_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Post_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Post_data[i].Activity_start_time.substring(8,10)} 至${myJson[0].Post_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Post_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Post_data[i].Activity_end_time.substring(8,10)}</p>
//                             </div>
//                         </div>



//                         <div class="row-3">
//                             <div class="keyword-box">
//                             <a  class="keyword">${myJson[0].Post_data[i].Sport_id}</a>
//                             <a  class="keyword">${myJson[0].Post_data[i].PersonalAsk_id}</a>
//                             ${myJson[0].Post_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Post_data[i].Sex}</a>`}

//                             </div>

//                             <div class="msg-num-box">
//                                 <div class="mycard-icon rwd_display" id="msg">
//                                     <i class="fa-solid fa-comment-dots"></i>
//                                     <p>${myJson[0].Post_data[i].Comment_count}</p>
//                                 </div>
//                                 <div class="mycard-icon num-people rwd_display">
//                                     <i class="fa-solid fa-user"></i>
//                                     <p>${myJson[0].Post_data[i].Join_count}</p>
//                                 <p>/</p>
//                                 <p>${myJson[0].Post_data[i].Need_people}</p>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                 </div>
                
//             </div>
//     </div>
    
// </div>
//     `
//     }
//     }
    
// })




// // 我參加過的團 動態生成 －－－－－－－－－－－－－－－－－－－－－－－－－－
// fetch(`http://20.187.74.2/api/Customer_center`,{
//     method:'POST',
//     headers:
//     {
//         "Content-Type": "application/json;charset=utf-8"
//     },
//     body:JSON.stringify(
//         {
//             // 'Local_customer_id':8
//             'Local_customer_id':location.href.substring(44)
//         }
//     )
// })
// .then(function(response) {
//     return response.json()
// })
// .then(function(myJson) {

//     // console.log(myJson[0].Attend_data)
//     let str = ''
//     if(myJson[0].Attend_data.length==[])
//     {
//         document.getElementById("my_join_card").innerHTML +=
//         `<div class="like_nothing my_join_card ">
//         <p>目前沒有參加任何活動，快去加入他人的活動吧！</p>
//         </div>`
//         return str
        
//     }

//     else{
    
//         for(let i = 0;i<myJson[0].Attend_data.length;i++)
//          {
//             // console.log(myJson[0].Attend_data[i].Customer_img);
//         document.getElementById("my_join_card").innerHTML +=
//     `
//     <div class="grid-container3 my_join_card" data-postactivity_id = '${myJson[0].Attend_data[i].PostActivity_id}'>
    
//         <div class="activity_card_box cardleft" id="activity_detail_display_1">
//             <div class="activity_card">
//                 <div class="activity_card_img">
//                     <!-- 點選觀看個人介紹 -->
//                     <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Attend_data[i].Customer_img}">   
//                 </div>
//                 <!-- 卡片１ -->
//                 <div class="activity_card_content">
//                     <div class="col">
//                         <div class="row-1">
//                             <p>${myJson[0].Attend_data[i].Customer_name}</p>
//                             <div class="row-1_right">
                               
//                                 ${(new Date(myJson[0].Attend_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Attend_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                              
//                                 <div class="mycard-icon " id="like">
//                                     <i class="fa-solid fa-heart"></i>
//                                     <p>${myJson[0].Attend_data[i].Like_count}</p>
//                                 </div>
//                             </div>


//                         </div>
//                         <h3 class="mycard-title">${myJson[0].Attend_data[i].Post_title}</h3>

//                         <div class="row-2">
//                             <div class="mycard-icon" id="address">
//                                 <i class="fa-solid fa-location-dot"></i>
//                                 <p>${myJson[0].Attend_data[i].AllRegion_id}</p> &emsp;
//                                 <p>${myJson[0].Attend_data[i].Place}</p>
//                             </div>

//                             <div class="mycard-icon" id="date">
//                                 <i class="fa-regular fa-clock"></i>
//                                 <p>${myJson[0].Attend_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Attend_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Attend_data[i].Activity_start_time.substring(8,10)} 至${myJson[0].Attend_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Attend_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Attend_data[i].Activity_end_time.substring(8,10)}</p>
//                             </div>
//                         </div>



//                         <div class="row-3">
//                             <div class="keyword-box">
//                             <a  class="keyword">${myJson[0].Attend_data[i].Sport_id}</a>
//                             <a  class="keyword">${myJson[0].Attend_data[i].PersonalAsk_id}</a>
//                             ${myJson[0].Attend_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Attend_data[i].Sex}</a>`}

//                             </div>

//                             <div class="msg-num-box">
//                                 <div class="mycard-icon rwd_display" id="msg">
//                                     <i class="fa-solid fa-comment-dots"></i>
//                                     <p>${myJson[0].Attend_data[i].Comment_count}</p>
//                                 </div>
//                                 <div class="mycard-icon num-people rwd_display">
//                                     <i class="fa-solid fa-user"></i>
//                                     <p>${myJson[0].Attend_data[i].Join_count}</p>
//                                 <p>/</p>
//                                 <p>${myJson[0].Attend_data[i].Need_people}</p>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                 </div>
                
//             </div>
//     </div>
    
//     </div>
//     `
//     }
//     }
    
// })


// // 會員資料 動態生成 －－－－－－－－－－－－－－－－－－－－－－－－－－
// fetch(`http://20.187.74.2/api/Customer_center`,{
//     method:'POST',
//     headers:
//     {
//         "Content-Type": "application/json;charset=utf-8"
//     },
//     body:JSON.stringify(
//         {
//             // 'Local_customer_id':8
//             'Local_customer_id':location.href.substring(44)
//         }
//     )
// })
// .then(function(response) {
//     return response.json()
// })
// .then(function(myJson) {
//     // console.log(myJson[0].Like_data.length ==[])
//     // console.log(myJson[0].Like_data)
//     let str = ''
//     if(myJson[0].Like_data.length ==[])
//     {
//         // console.log('我在這裡');
//         document.getElementById("my_like_card").innerHTML +=
//         `<div class="like_nothing my_like_card ">
//         <p>目前沒有任何按讚紀錄，快去尋找你感興趣的文章！</p>
//         </div>`
//             return str
//     }
    
//     else{
    
//         for(let i = 0;i<myJson[0].Like_data.length;i++)
//          {
//             // console.log(myJson[0].Attend_data[i].Customer_img);
//         document.getElementById("my_like_card").innerHTML +=
//     `
//     <div class="grid-container3 my_join_card" data-postactivity_id = '${myJson[0].Like_data[i].PostActivity_id}'>
    
//         <div class="activity_card_box cardleft" id="activity_detail_display_1">
//             <div class="activity_card">
//                 <div class="activity_card_img">
//                     <!-- 點選觀看個人介紹 -->
//                     <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Like_data[i].Customer_img}">   
//                 </div>
//                 <!-- 卡片１ -->
//                 <div class="activity_card_content">
//                     <div class="col">
//                         <div class="row-1">
//                             <p>${myJson[0].Like_data[i].Customer_name}</p>
//                             <div class="row-1_right">
                               
//                                 ${(new Date(myJson[0].Like_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Like_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                              
//                                 <div class="mycard-icon " id="like">
//                                     <i class="fa-solid fa-heart"></i>
//                                     <p>${myJson[0].Like_data[i].Like_count}</p>
//                                 </div>
//                             </div>


//                         </div>
//                         <h3 class="mycard-title">${myJson[0].Like_data[i].Post_title}</h3>

//                         <div class="row-2">
//                             <div class="mycard-icon" id="address">
//                                 <i class="fa-solid fa-location-dot"></i>
//                                 <p>${myJson[0].Like_data[i].AllRegion_id}</p> &emsp;
//                                 <p>${myJson[0].Like_data[i].Place}</p>
//                             </div>

//                             <div class="mycard-icon" id="date">
//                                 <i class="fa-regular fa-clock"></i>
//                                 <p>${myJson[0].Like_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Like_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Like_data[i].Activity_start_time.substring(8,10)} 至${myJson[0].Like_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Like_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Like_data[i].Activity_end_time.substring(8,10)}</p>
//                             </div>
//                         </div>



//                         <div class="row-3">
//                             <div class="keyword-box">
//                             <a  class="keyword">${myJson[0].Like_data[i].Sport_id}</a>
//                             <a  class="keyword">${myJson[0].Like_data[i].PersonalAsk_id}</a>
//                             ${myJson[0].Like_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Like_data[i].Sex}</a>`}

//                             </div>

//                             <div class="msg-num-box">
//                                 <div class="mycard-icon rwd_display" id="msg">
//                                     <i class="fa-solid fa-comment-dots"></i>
//                                     <p>${myJson[0].Like_data[i].Comment_count}</p>
//                                 </div>
//                                 <div class="mycard-icon num-people rwd_display">
//                                     <i class="fa-solid fa-user"></i>
//                                     <p>${myJson[0].Like_data[i].Join_count}</p>
//                                 <p>/</p>
//                                 <p>${myJson[0].Like_data[i].Need_people}</p>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                 </div>
                
//             </div>
//     </div>
    
//     </div>
//     `
//     }
//         }
    
// })




// // 會員資料 動態生成 －－－－－－－－－－－－－－－－－－－－－－－－－－
// fetch(`http://20.187.74.2/api/Customer_center`,{
//     method:'POST',
//     headers:
//     {
//         "Content-Type": "application/json;charset=utf-8"
//     },
//     body:JSON.stringify(
//         {
//             // 'Local_customer_id':8
//             'Local_customer_id':location.href.substring(44)
//         }
//     )
// })
// .then(function(response) {
//     return response.json()
// })
// .then(function(myJson) {

//     // console.log(myJson[0].Customer_data)
//     // let str = ''
//     // if(myJson[0].Customer_data.length ==[])
//     // {
//     //     // console.log('我在這裡');
//     //     document.getElementById("my_like_card").innerHTML +=
//     //     `<div class="like_nothing my_like_card ">
//     //     <p>目前沒有任何按讚紀錄，快去尋找你感興趣的文章！</p>
//     //     </div>`
//     //         return str
//     // }
    
//     // for(let i = 0;i<myJson[0].Attend_data.length;i++)
//     //      {
//         document.getElementById("grid-container").innerHTML +=
//     `
//     <!-- 簡略會員中心 -->

    

//         <div class="place1">
//             <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Customer_data[0].Images}" class="circular--square" alt="大頭貼" width="80" height="80">
//         </div>

//         <div class="place2">
       
//             <label>${myJson[0].Customer_data[0].Name} | ${ ((new Date()).getFullYear())- myJson[0].Customer_data[0].Birthday.substring(0,4)}</label>
//         </div>

//         <div class="place3">
//             <img src="./img/gmail.png" alt="" width="26" height="26">

//         </div>

//         <div class="place4">
//             <label>${myJson[0].Customer_data[0].Email}</label>
//         </div>

//         <div class="place5">
//             <label for="">關於我</label>
//         </div>

//         <div class="place6">
//             <label>${myJson[0].Customer_data[0].About_me}</label>
//         </div>

//         <div class="place7">
//             <input class="button_edit" type="button" value="編 輯">
//         </div>



//     `

//     document.getElementById("grid-container2").innerHTML +=
//     `

//         <div class="place_1">
//             <div>
//                 <label class="box2_lable4">姓名</label>
//             </div>
//             <br>
//             <div>
//                 <label class="personal_information">${myJson[0].Customer_data[0].Name}</label>
//             </div>
//             <br>
//             <hr>
//         </div>

//         <div class="place_2">
//             <div>
//                 <label class="box2_lable4">生日</label>
//             </div>
//             <br>
//             <div>
//                 <label class="personal_information">${myJson[0].Customer_data[0].Birthday.substring(0,4)}/${myJson[0].Customer_data[0].Birthday.substring(5,7)}/${myJson[0].Customer_data[0].Birthday.substring(8,10)}</label>
//             </div>
//             <br>
//             <hr>
//         </div>

//         <div class="place_3">
//             <div>
//                 <label class="box2_lable4">帳號</label>
//             </div>
//             <br>
//             <div>
//                 <label class="personal_information">${myJson[0].Customer_data[0].Email}</label>
//             </div>
//             <br>
//             <hr>
//         </div>


//         <!-- 卡片區 -->


//     `

    
//     // }
    
// })


fetch('./json/git_detail.json',{
    method:'GET',
    headers:
    {
        "Content-Type": "application/json;charset=utf-8"
    },
    // body:JSON.stringify(
    //     {
    //         // 'Local_customer_id':8
    //         'Local_customer_id':location.href.substring(44)
    //     }
    // )
})
.then(function(response) {
    return response.json()
})
.then(function(myJson) {
    // 取得網址
    console.log(location.search.replace('?id=',''));
    let id =location.search.replace('?id=','');
    console.log(myJson)
    //會員個資料上
    document.getElementById("grid-container").innerHTML =
    `
    <!-- 簡略會員中心 -->
        <div class="place1">
            <img src="${myJson[id].Customer_data[0].Images}" class="circular--square" alt="大頭貼" width="80" height="80">
        </div>

        <div class="place2">
       
            <label>${myJson[id].Customer_data[0].Name} | ${ ((new Date()).getFullYear())- myJson[id].Customer_data[0].Birthday.substring(0,4)}</label>
        </div>

        <div class="place3">
            <img src="./img/gmail.png" alt="" width="26" height="26">

        </div>

        <div class="place4">
            <label>${myJson[id].Customer_data[0].Email}</label>
        </div>

        <div class="place5">
            <label for="">關於我</label>
        </div>

        <div class="place6">
            <label>${myJson[id].Customer_data[0].About_me}</label>
        </div>

        <div class="place7">
            <input class="button_edit" type="button" value="編 輯">
        </div>
    `
    //會員個資料下
    document.getElementById("grid-container2").innerHTML =
    `

        <div class="place_1">
            <div>
                <label class="box2_lable4">姓名</label>
            </div>
            <br>
            <div>
                <label class="personal_information">${myJson[id].Customer_data[0].Name}</label>
            </div>
            <br>
            <hr>
        </div>

        <div class="place_2">
            <div>
                <label class="box2_lable4">生日</label>
            </div>
            <br>
            <div>
                <label class="personal_information">${myJson[id].Customer_data[0].Birthday.substring(0,4)}/${myJson[id].Customer_data[0].Birthday.substring(5,7)}/${myJson[id].Customer_data[0].Birthday.substring(8,10)}</label>
            </div>
            <br>
            <hr>
        </div>

        <div class="place_3">
            <div>
                <label class="box2_lable4">帳號</label>
            </div>
            <br>
            <div>
                <label class="personal_information">${myJson[id].Customer_data[0].Email}</label>
            </div>
            <br>
            <hr>
        </div>


        <!-- 卡片區 -->
    `
    // console.log(myJson[0].Attend_data.length==0)
    // console.log(myJson[0].Like_data.length == 0)
    // 我發起過的團
    if(myJson[0].Post_data.length==0)
    {
        document.getElementById("my_activity_card").innerHTML =
        `<div class="like_nothing my_activity_card ">
        <p>目前沒有發起任何文章，發文發起來！</p>
        </div>`
    }
    else
    {
        document.getElementById("my_activity_card").innerHTML = ''
        for(let i = 0;i<myJson[0].Post_data.length;i++)
        {
            document.getElementById("my_activity_card").innerHTML +=
            `
            <div class="grid-container3 my_activity_card">
                <div class="activity_card_box cardleft"  data-postactivity_id = '${myJson[0].Post_data[i].PostActivity_id}'>
                    <div class="activity_card">
                        <div class="activity_card_img">
                            <img src="${myJson[0].Post_data[i].Customer_img}">   
                        </div>
                        <div class="activity_card_content">
                            <div class="col">
                                <div class="row-1">
                                    <p>${myJson[0].Post_data[i].Customer_name}</p>
                                    <div class="row-1_right">
                                        ${(new Date(myJson[0].Post_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Post_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                                        <div class="mycard-icon">
                                            <i class="fa-solid fa-heart"></i>
                                            <p>${myJson[0].Post_data[i].Like_count}</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mycard-title">${myJson[0].Post_data[i].Post_title}</h3>
                                <div class="row-2">
                                    <div class="mycard-icon">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <p>${myJson[0].Post_data[i].AllRegion_id}</p> &emsp;
                                        <p>${myJson[0].Post_data[i].Place}</p>
                                    </div>
            
                                    <div class="mycard-icon">
                                        <i class="fa-regular fa-clock"></i>
                                        <p>${myJson[0].Post_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Post_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Post_data[i].Activity_start_time.substring(8,10)} 至 ${myJson[0].Post_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Post_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Post_data[i].Activity_end_time.substring(8,10)}</p>
                                    </div>
                                </div>
                                <div class="row-3">
                                    <div class="keyword-box">
                                        <a  class="keyword">${myJson[0].Post_data[i].Sport_id}</a>
                                        <a  class="keyword">${myJson[0].Post_data[i].PersonalAsk_id}</a>
                                        ${myJson[0].Post_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Post_data[i].Sex}</a>`}
                                    </div>
                                    <div class="msg-num-box">
                                        <div class="mycard-icon rwd_display">
                                            <i class="fa-solid fa-comment-dots"></i>
                                            <p>${myJson[0].Post_data[i].Comment_count}</p>
                                        </div>
                                        <div class="mycard-icon num-people rwd_display">
                                            <i class="fa-solid fa-user"></i>
                                            <p>${myJson[0].Post_data[i].Join_count}</p>
                                            <p>/</p>
                                            <p>${myJson[0].Post_data[i].Need_people}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    // 我報名的團
    if(myJson[0].Attend_data.length==0)
    {
        document.getElementById("my_join_card").innerHTML =
        `<div class="like_nothing my_join_card ">
        <p>目前沒有參加任何活動，快去加入他人的活動吧！</p>
        </div>`
    }
    else
    {
        document.getElementById("my_join_card").innerHTML = ''
        for(let i = 0;i<myJson[0].Attend_data.length;i++)
        {
            document.getElementById("my_join_card").innerHTML +=
            `
            <div class="grid-container3 my_join_card">
                <div class="activity_card_box cardleft"  data-postactivity_id = '${myJson[0].Attend_data[i].PostActivity_id}'>
                    <div class="activity_card">
                        <div class="activity_card_img">
                            <img src="${myJson[0].Attend_data[i].Customer_img}">   
                        </div>
                        <div class="activity_card_content">
                            <div class="col">
                                <div class="row-1">
                                    <p>${myJson[0].Attend_data[i].Customer_name}</p>
                                    <div class="row-1_right">
                                        ${(new Date(myJson[0].Attend_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Attend_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                                        <div class="mycard-icon">
                                            <i class="fa-solid fa-heart"></i>
                                            <p>${myJson[0].Attend_data[i].Like_count}</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mycard-title">${myJson[0].Attend_data[i].Post_title}</h3>
                                <div class="row-2">
                                    <div class="mycard-icon">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <p>${myJson[0].Attend_data[i].AllRegion_id}</p> &emsp;
                                        <p>${myJson[0].Attend_data[i].Place}</p>
                                    </div>
            
                                    <div class="mycard-icon">
                                        <i class="fa-regular fa-clock"></i>
                                        <p>${myJson[0].Attend_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Attend_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Attend_data[i].Activity_start_time.substring(8,10)} 至 ${myJson[0].Attend_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Attend_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Attend_data[i].Activity_end_time.substring(8,10)}</p>
                                    </div>
                                </div>
                                <div class="row-3">
                                    <div class="keyword-box">
                                        <a  class="keyword">${myJson[0].Attend_data[i].Sport_id}</a>
                                        <a  class="keyword">${myJson[0].Attend_data[i].PersonalAsk_id}</a>
                                        ${myJson[0].Attend_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Attend_data[i].Sex}</a>`}
                                    </div>
                                    <div class="msg-num-box">
                                        <div class="mycard-icon rwd_display">
                                            <i class="fa-solid fa-comment-dots"></i>
                                            <p>${myJson[0].Attend_data[i].Comment_count}</p>
                                        </div>
                                        <div class="mycard-icon num-people rwd_display">
                                            <i class="fa-solid fa-user"></i>
                                            <p>${myJson[0].Attend_data[i].Join_count}</p>
                                            <p>/</p>
                                            <p>${myJson[0].Attend_data[i].Need_people}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    // 我的最愛
    if(myJson[0].Like_data.length==0)
    {
        document.getElementById("my_like_card").innerHTML =
        `<div class="like_nothing  my_like_card">
        <p>目前沒有任何按讚紀錄，快去尋找你感興趣的文章！</p>
        </div>`
    }
    else
    {
        document.getElementById("my_like_card").innerHTML = ''
        for(let i = 0;i<myJson[0].Like_data.length;i++)
        {
            document.getElementById("my_like_card").innerHTML +=
            `
            <div class="grid-container3 my_like_card">
                <div class="activity_card_box cardleft"  data-postactivity_id = '${myJson[0].Like_data[i].PostActivity_id}'>
                    <div class="activity_card">
                        <div class="activity_card_img">
                            <img src="${myJson[0].Like_data[i].Customer_img}">   
                        </div>
                        <div class="activity_card_content">
                            <div class="col">
                                <div class="row-1">
                                    <p>${myJson[0].Like_data[i].Customer_name}</p>
                                    <div class="row-1_right">
                                        ${(new Date(myJson[0].Like_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Like_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                                        <div class="mycard-icon">
                                            <i class="fa-solid fa-heart"></i>
                                            <p>${myJson[0].Like_data[i].Like_count}</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mycard-title">${myJson[0].Like_data[i].Post_title}</h3>
                                <div class="row-2">
                                    <div class="mycard-icon">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <p>${myJson[0].Like_data[i].AllRegion_id}</p> &emsp;
                                        <p>${myJson[0].Like_data[i].Place}</p>
                                    </div>
            
                                    <div class="mycard-icon">
                                        <i class="fa-regular fa-clock"></i>
                                        <p>${myJson[0].Like_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Like_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Like_data[i].Activity_start_time.substring(8,10)} 至 ${myJson[0].Like_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Like_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Like_data[i].Activity_end_time.substring(8,10)}</p>
                                    </div>
                                </div>
                                <div class="row-3">
                                    <div class="keyword-box">
                                        <a  class="keyword">${myJson[0].Like_data[i].Sport_id}</a>
                                        <a  class="keyword">${myJson[0].Like_data[i].PersonalAsk_id}</a>
                                        ${myJson[0].Like_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Like_data[i].Sex}</a>`}
                                    </div>
                                    <div class="msg-num-box">
                                        <div class="mycard-icon rwd_display">
                                            <i class="fa-solid fa-comment-dots"></i>
                                            <p>${myJson[0].Like_data[i].Comment_count}</p>
                                        </div>
                                        <div class="mycard-icon num-people rwd_display">
                                            <i class="fa-solid fa-user"></i>
                                            <p>${myJson[0].Like_data[i].Join_count}</p>
                                            <p>/</p>
                                            <p>${myJson[0].Like_data[i].Need_people}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
})
.then(function()
{
    // 點擊簡易卡片後會生成卡片詳細內容
    $('.activity_card_box').click(function (e) 
    { 
        var $this=$(this);
        var index=$this.index();
        console.log(index);
        
        e.preventDefault();
        // function function_for_card_detail(){

        // }
        
        fetch('./json/git_detail.json',{
            method:'GET',
            headers:
            {
                "Content-Type": "application/json;charset=utf-8"
            },
            // body:JSON.stringify(
            //     {
            //         'PostActivity_id':'index'
            //     }
            // )
        })
        .then(function(response) {
            
            return response.json()
        })
        .then(function(myJson) {
            console.log(myJson);
            //生成報名者
            function function_Attend_data()
            {
                let str = ''
                if(myJson[index].Attend_data==[])
                {
                    return str
                }
               else
               {
                    for(let i =0;i<myJson[index].Attend_data.length;i++)
                    {
                        str +=
                        `
                        <!-- 下面的路徑要改 -->
                        <div class="activity_add_person_img for_hover_user_out" style="background-image: url(${myJson[index].Attend_data[i].Joiner_img});${myJson[index].Attend_data[i].Attend_state==true?'border:3px solid #21CD24':'border:none'}" date-customer_id="${myJson[index].Attend_data[i].Joiner_id}">
                            <!-- 滑過觀看使用者資料 -->
                            <div class="hover_user_out" id="hover_user_out">
                                <!-- 頭貼／姓名／年齡/mail -->
                                <div class="row_left">
                                    <div class="activity_author_img" style="background-image: url(${myJson[index].Attend_data[i].Joiner_img});">
                                        <div class="male_icon">
                                            <p>${myJson[index].Attend_data[i].Joiner_sex.substr(0,1)}</p>
                                        </div>
                                    </div>
                                    <div class="add_person_content_box">
                                        <!--   姓名 年齡 -->
                                        <div class="add_person_content">
                                            <p class="add_add_person_name">
                                                ${myJson[index].Attend_data[i].Joiner_name}
                                            </p>
                                            <p class="add_add_person_old">
                                                ${myJson[index].Attend_data[i].Joiner_age}
                                            </p>

                                        </div>
                                        <!-- email -->
                                        <div class="my_icon">
                                            <i class="fa-regular fa-envelope"></i>
                                            <p class="add_add_person_Email">
                                                ${myJson[index].Attend_data[i].Joiner_email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hover_user_about_me">
                                    <p>${myJson[index].Attend_data[i].Joiner_aboutme}</p>
                                </div>

                                <div class="post_activity_num">
                                    <a href="./user_personal.html?id=${myJson[index].Attend_data[i].Joiner_id}" target="view_window">詳細資料</a>
                                </div>
                            </div>
                        </div>
                        `
                    }
                return str
               }
                
            }
            //生成留言
            function function_Comment_data()
            {
                let str = ''
                if(myJson[index].Comment_data==[])
                {
                    return ''
                }
                else
                {
                    for(let i =0;i<myJson[index].Comment_data.length;i++)
                    {
                        str +=
                        `
                        <div class="activity__message_detail_out">
                            <div class="activity__message_detail">
                                <!-- 留言者照片 -->
                                <div class="activity__questioner_row">
                                    <div class="activity__questioner_img for_hover_user_out" style="background-image: url(${myJson[index].Comment_data[i].Comment_img});" date-customer_id="${myJson[index].Comment_data[i].Commenter_id}">
                                        <!-- 滑過觀看使用者資料 -->
                                        <div class="hover_user_out" id="hover_user_out">
                                            <!-- 頭貼／姓名／年齡/mail -->
                                            <div class="row_left">
                                                <div class="activity_author_img" style="background-image: url(${myJson[index].Comment_data[i].Comment_img});">
                                                    <div class="male_icon">
                                                        <p>${myJson[index].Comment_data[i].Comment_sex.substr(0,1)}</p>
                                                    </div>
                                                </div>
                                                <div class="add_person_content_box">
                                                    <!--   姓名 年齡 -->
                                                    <div class="add_person_content">
                                                        <p class="add_add_person_name">
                                                            ${myJson[index].Comment_data[i].Comment_name}
                                                        </p>
                                                        <p class="add_add_person_old">
                                                            ${myJson[index].Comment_data[i].Comment_age}
                                                        </p>

                                                    </div>
                                                    <!-- email -->
                                                    <div class="my_icon">
                                                        <i class="fa-regular fa-envelope"></i>
                                                        <p class="add_add_person_Email">
                                                            ${myJson[index].Comment_data[i].Comment_email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hover_user_about_me">
                                                <p>${myJson[index].Comment_data[i].Comment_aboutme}</p>
                                            </div>

                                            <div class="post_activity_num">
                                                <a href="./user_personal.html?id=${myJson[index].Comment_data[i].Comment_id}" target="view_window">詳細資料</a>
                                            </div>

                                        </div>
                                    </div>
                                    <!-- 留言者名稱內容 -->
                                    <div class="activity__questioner_clo">
                                        <p class="activity__questioner_name">${myJson[index].Comment_data[i].Comment_name}</p>
                                        <p class="activity__questioner_content">${myJson[index].Comment_data[i].Comment_content}</p>
                                    </div>
                                </div>

                                <div class="activity__question_time">${myJson[index].Comment_data[i].Comment_time.replace('T',' ').substring(0,19)}</div>

                            </div>

                        </div>
                        `
                    }
                    return str
                }
                
            }
            //生成檢視報名者資料
            function function_add_person_out()
            {
                let str = ''

                if(myJson[index].Attend_data==[])
                {
                    return str
                }
               else
               {
                    // console.log(sessionStorage.getItem('Customer_id'))
                    // console.log(myJson[index].PostActicicy_data[0].Poster_id)
                    // console.log(myJson[index].PostActicicy_data[0].Poster_id == sessionStorage.getItem('Customer_id'))
                    for(let i =0;i<myJson[index].Attend_data.length;i++)
                    {
                        str +=
                        `
                        <!-- 報名者名單卡片１ -->
                        <div class="add_person_card">
                            <!-- 卡片左邊 -->
                            <div class="row_left">
                                <div class="activity_author_img for_hover_user_out" style="background-image: url(${myJson[index].Attend_data[i].Joiner_img});${myJson[index].Attend_data[i].Attend_state==true?'border:3px solid #21CD24;':'border:;'}">
                                    <div class="male_icon">
                                        <p>${myJson[index].Attend_data[i].Joiner_sex.substr(0,1)}</p>
                                    </div>
                                    <!-- 滑過觀看使用者資料 -->
                                    <div class="hover_user_out" id="hover_user_out">
                                        <!-- 頭貼／姓名／年齡/mail -->
                                        <div class="row_left">
                                            <div class="activity_author_img" style="background-image: url(${myJson[index].Attend_data[i].Joiner_img});">
                                                <div class="male_icon">
                                                    <p>${myJson[index].Attend_data[i].Joiner_sex.substr(0,1)}</p>
                                                </div>
                                            </div>
                                            <div class="add_person_content_box">
                                                <!--   姓名 年齡 -->
                                                <div class="add_person_content">
                                                    <p class="add_add_person_name">
                                                        ${myJson[index].Attend_data[i].Joiner_name}
                                                    </p>
                                                    <p class="add_add_person_old">
                                                        ${myJson[index].Attend_data[i].Joiner_age}
                                                    </p>

                                                </div>
                                                <!-- email -->
                                                <div class="my_icon">
                                                    <i class="fa-regular fa-envelope"></i>
                                                    <p class="add_add_person_Email">
                                                        ${myJson[index].Attend_data[i].Joiner_email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hover_user_about_me">
                                            <p>${myJson[index].Attend_data[i].Joiner_aboutme}</p>
                                        </div>

                                        <div class="post_activity_num">
                                            <a href="./user_personal.html?id=${myJson[index].Attend_data[i].Joiner_id}" target="view_window">詳細資料</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="add_person_content_box">
                                    <!--   姓名 年齡 -->
                                    <div class="add_person_content">
                                        <p class="add_add_person_name">
                                            ${myJson[index].Attend_data[i].Joiner_name}
                                        </p>
                                        <p class="add_add_person_old">
                                            ${myJson[index].Attend_data[i].Joiner_age}
                                        </p>

                                    </div>
                                    <!-- email -->
                                    <div class="my_icon">
                                        <i class="fa-regular fa-envelope"></i>
                                        <p class="add_add_person_Email">
                                            ${myJson[index].Attend_data[i].Joiner_email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            ${sessionStorage.getItem('Customer_id')==document.getElementById('activity_content_out').dataset.poster_id?(myJson[index].Attend_data[i].Attend_state==true?`<div class="agree_btn_out"><div class="attend_btn"><p>已參加</p></div></div>`:`<div class="agree_btn_out"><div class="yes_btn" data-joiner_name="${myJson[index].Attend_data[i].Joiner_name.toString()}" data-joiner_id="${myJson[index].Attend_data[i].Joiner_id.toString()}" data-attend_id="${myJson[index].Attend_data[i].Attend_id.toString()}"><p>同意</p></div></div>`):''}
                            </div>
                        `
                    }
                return str
               }
                
            }

            let list_joiner_id = []
            if(myJson[index].Attend_data.length == 0)
            {
                list_joiner_id = []
            }
            else
            {
                for(let i = 0;i<myJson[index].Attend_data.length;i++)
                {
                    list_joiner_id.push(myJson[index].Attend_data[i].Joiner_id) 
                }
            }


            document.querySelector('#activity_display').innerHTML=
            `
            <div class="activity_content_out" id="activity_content_out" data-postactivity_id="${myJson[index].PostActicicy_data[0].PostActivity_id.toString()}" data-poster_id="${myJson[index].PostActicicy_data[0].Poster_id.toString()}">
            <div class="activity_img border_bottom_gray">
                <!-- 關閉此頁按鈕 -->
                <div class="activity_display_close" id="activity_display_close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            
            <!-- 發文者資訊 -->
            <div class="activity_author">
           
                <!-- 點選觀看個人介紹 -->
                <div class="activity_author_img for_hover_user_out" id="activity_author_img" style="background-image: url(${myJson[index].PostActicicy_data[0].Poster_img})" date-customer_id="${myJson[index].PostActicicy_data[0].Poster_id.toString()}">
                    <!-- 滑過觀看使用者資料 -->
                    <div class="hover_user_out" id="hover_user_out">
                        <!-- 頭貼／姓名／年齡/mail -->
                        <div class="row_left">
                            <div class="activity_author_img" style="background-image: url(${myJson[index].PostActicicy_data[0].Poster_img});">
                                <div class="male_icon">
                                    <p>${myJson[index].PostActicicy_data[0].Poster_sex.substr(0,1)}</p>
                                </div>
                            </div>
                            <div class="add_person_content_box">
                                <!--   姓名 年齡 -->
                                <div class="add_person_content">
                                    <p class="add_add_person_name">
                                        ${myJson[index].PostActicicy_data[0].Poster_name}
                                    </p>
                                    <p class="add_add_person_old">
                                        ${myJson[index].PostActicicy_data[0].Poster_age}
                                    </p>

                                </div>
                                <!-- email -->
                                <div class="my_icon">
                                    <i class="fa-regular fa-envelope"></i>
                                    <p class="add_add_person_Email">
                                        ${myJson[index].PostActicicy_data[0].Poster_email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="hover_user_about_me">
                            <p>${myJson[index].PostActicicy_data[0].Poster_aboutme}</p>
                        </div>
                        
                        <div class="post_activity_num">
                            <a href="./user_personal.html?id=${myJson[index].PostActicicy_data[0].PostActivity_id}">詳細資料</a>
                        </div>

                    </div>

                </div>

                <div class="activity_author_detail">
                    <p>${myJson[index].PostActicicy_data[0].Poster_name}</p>
                    <p>${myJson[index].PostActicicy_data[0].Poster_email}</p>
                </div>
            </div>


            <div class="activity_content_box">

                <!-- 標題 -->
                <div class="activity_title_box">
                    <div class="activity_title">
                        <h3>${myJson[index].PostActicicy_data[0].Post_title}</h3>
                        <div class="my_icon">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>${myJson[index].PostActicicy_data[0].AllRegion_id}</p>&emsp;
                            <p>${myJson[index].PostActicicy_data[0].Place}</p>
                        </div>

                    </div>
                    <!-- ${(new Date(myJson[index].PostActicicy_data[0].End_time.replace('T',' '))).getTime()>Date.now() && (new Date(myJson[index].PostActicicy_data[0].Start_time.replace('T',' '))).getTime()<Date.now() && myJson[index].PostActicicy_data[0].Poster_id == sessionStorage.getItem('Customer_id')?'<div class="add_activity" id="add_activity"><i class="fa-solid fa-plus"></i>我要報名</div>':''} -->
                </div>

                <!--關鍵字 -->
                <div class="activity_tag ">
                    <a  class="keyword">${myJson[index].PostActicicy_data[0].Sport_id}</a>
                    <a  class="keyword">${myJson[index].PostActicicy_data[0].PersonalAsk_id}</a>
                    ${myJson[index].PostActicicy_data[0].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[index].PostActicicy_data[0].Sex}</a>`}
                    <a  class="keyword_old">${myJson[index].PostActicicy_data[0].Age_rangefirst}歳至${myJson[index].PostActicicy_data[0].Age_rangeend}歳</a>
                    ${(new Date(myJson[index].PostActicicy_data[0].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[index].PostActicicy_data[0].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="keyword_startline">未開始報名</a>':''):'<a  class="keyword_deadline">已截止</a>'} 
                    
                </div>
                <!-- 內文 -->
                <div class="activity_content">
                    ${myJson[index].PostActicicy_data[0].PostActivity_content}
                </div>

                <!-- 報名和活動時間．報名者 -->
                <section class="activity_content_box_out">
                    <!-- 報名時間 -->
                    <div class="activity_detail_box">
                        <div class="my_icon">
                            <span class="line_icon"></span>
                            <p>報名期間</p>
                        </div>
                        <div class="activity_add_date">
                            <p class="activity_add_start_date">${myJson[index].PostActicicy_data[0].Start_time.replace('T',' ')}</p>
                            <p>至</p>
                            <p class="activity_add_end_date">${myJson[index].PostActicicy_data[0].End_time.replace('T',' ')}</p>
                        </div>
                    </div>

                    <!-- 活動時間 -->
                    <div class="activity_detail_box">
                        <div class="my_icon">
                            <span class="line_icon"></span>
                            <p>活動時間</p>
                        </div>
                        <div class="activity_date">
                            <p class="activity_tart_date">${myJson[index].PostActicicy_data[0].Activity_start_time.replace('T',' ')}</p>
                            <p>至</p>
                            <p class="activity_end_date">${myJson[index].PostActicicy_data[0].Activity_end_time.replace('T',' ')}</p>
                        </div>
                    </div>

                    <!-- 報名者 -->
                    <div class="activity_detail_box">
                        <div class="my_icon">
                            <span class="line_icon"></span>
                            <p>報名者</p>
                        </div>

                        <div class="activity_add_person">
                            <i class="fa-solid fa-user-group"></i>
                            <p>目前報名人數</p>
                            <p class="activity_add_person_num">${myJson[index].PostActicicy_data[0].accept_join_count}</p>
                            <p>/</p>
                            <p class="activity_mix_person_num">${myJson[index].PostActicicy_data[0].Need_people}</p>
                        </div>
                        <div class="activity_add_person_img_box">
                            ${
                                function_Attend_data()
                            }
                        </div>

                    </div>

                </section>

                <!-- 發文者使用區（要隱藏） -->
                <div class="activity_author_can_see">
                ${(new Date(myJson[index].PostActicicy_data[0].End_time.replace('T',' '))).getTime()>Date.now()&&(new Date(myJson[index].PostActicicy_data[0].Start_time.replace('T',' '))).getTime()<Date.now()&&sessionStorage.getItem('Customer_id') != myJson[index].PostActicicy_data[0].Poster_id&&!(list_joiner_id.includes(parseInt(sessionStorage.getItem('Customer_id'))))?'<div class="add_activity" id="add_activity"><i class="fa-solid fa-plus"></i>我要報名</div>':''}
                ${sessionStorage.getItem('Customer_id') == myJson[index].PostActicicy_data[0].Poster_id?
                `
                    <button class="view_activity_add_person" id="view_activity_add_person">檢視報名者資料</button>
                    `:''}
                    
                </div>





                <!-- 我要報名按鈕 -->
                <!-- <div class="add_activity">
                    <button>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <div>
                        我要報名
                    </div>
                </div> -->
            </div>

            <!-- 留言區 -->
            <section class="activity_message height_232px_overflow_hidden" id="activity_message">
                <div class="my_icon">
                    <i class="fa-solid fa-message"></i>
                    <p>留言區</p>
                </div>
                ${
                    function_Comment_data()
                }
            </section>
            <div class="see_all_message_box">
                    <p class="see_all_message">查看全部留言</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>

            <!--留言區 -->
            <div class="activity_user_message">
                <input type="text" class="message_box" placeholder="留言"></input>
                <i class="fa-regular fa-paper-plane"></i>
                <!-- <i class="fa-solid fa-star"></i> -->
                <!-- <i class="fa-solid fa-circle-plus"></i> -->
            </div>

        </div>
            `
            document.getElementById('add_person_out').innerHTML = function_add_person_out()


            document.getElementById('activity_display').classList.remove("display_none")
            document.body.style.overflow = 'hidden'

        })
        .then(function() {
            // 關閉活動詳細
            document.getElementById('activity_display_close').addEventListener('click',function()
            {
                document.getElementById('activity_display').classList.add("display_none")
                document.body.style.overflow = 'scroll'
            })
            

            // 當點擊檢視報名者，拿掉display none ,顯示報名者資訊頁-----
            $("#view_activity_add_person").click(function()
            {
                $("#activity_add_personal_display").removeClass("display_none")
            })
              
              // 報名者資訊頁面關閉
            $('#view_activity_add_person_close').click(function()
            {
                $('#activity_add_personal_display').addClass("display_none")
            })

            //我要報名
            // $('#add_activity').click(function (e) { 
            //     e.preventDefault();
            //     // console.log('123')
            //     // console.log(document.getElementById('activity_content_out').dataset.postactivity_id)
            //     // console.log(sessionStorage.getItem('Customer_id'))
            //     fetch('http://20.187.74.2/api/Attend_count',{
            //         method:'POST',
            //         headers:
            //         {
            //             "Content-Type": "application/json;charset=utf-8"
            //         },
            //         body:JSON.stringify(
            //             {
            //                 'PostActivity_id':document.getElementById('activity_content_out').dataset.postactivity_id,
            //                 'Customer_id':sessionStorage.getItem('Customer_id')
            //             }
            //         )
            //     })
            //     .then(function (response) {
            //         return response.json();
            //     })
            //     .then(function (body) {
            //         console.log(body);
            //         if(body == 1)
            //         {
            //             alert('報名成功')
            //             $('#add_activity').addClass('display_none');
            //             document.querySelector('.activity_add_person_img_box').innerHTML +=
            //             `
            //             <div class="activity_add_person_img for_hover_user_out" style="background-image: url(${'http://20.187.74.2/FileUpload/'+sessionStorage.getItem('Images')});" date-customer_id="${sessionStorage.getItem('Customer_id')}">
            //                 <!-- 滑過觀看使用者資料 -->
            //                 <div class="hover_user_out" id="hover_user_out">
            //                     <!-- 頭貼／姓名／年齡/mail -->
            //                     <div class="row_left">
            //                         <div class="activity_author_img" style="background-image: url(${'http://20.187.74.2/FileUpload/'+sessionStorage.getItem('Images')});">
            //                             <div class="male_icon">
            //                                 <p>${sessionStorage.getItem('Sex')}</p>
            //                             </div>
            //                         </div>
            //                         <div class="add_person_content_box">
            //                             <!--   姓名 年齡 -->
            //                             <div class="add_person_content">
            //                                 <p class="add_add_person_name">
            //                                     ${sessionStorage.getItem('Name')}
            //                                 </p>
            //                                 <p class="add_add_person_old">
            //                                     ${(new Date().getFullYear())-sessionStorage.getItem('Birthday').substring(0,4)}
            //                                 </p>

            //                             </div>
            //                             <!-- email -->
            //                             <div class="my_icon">
            //                                 <i class="fa-regular fa-envelope"></i>
            //                                 <p class="add_add_person_Email">
            //                                     ${sessionStorage.getItem('Email')}
            //                                 </p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div class="hover_user_about_me">
            //                         <p>${sessionStorage.getItem('About_me')}</p>
            //                     </div>

            //                     <div class="post_activity_num">
            //                         <a href="./user_personal.html?id=${sessionStorage.getItem('Customer_id')}" target="view_window">詳細資料</a>
            //                     </div>
            //                 </div>
            //             </div>
            //             `
            //         }
            //         else
            //         {
            //             alert('報名失敗')
            //         }
            //     })
            //     .catch(function(err){
            //         console.log(err)
            //     })
                
            // });

            // 評論區發言
            // $('.activity_user_message i').click(function (e) { 
            //     e.preventDefault();
            //     console.log(document.getElementById('activity_content_out').dataset.postactivity_id)
            //     console.log(sessionStorage.getItem('Customer_id'))
            //     console.log(document.querySelector('.message_box').value)
            //     fetch('http://20.187.74.2/api/Activity_comment',{
            //         method:'POST',
            //         headers:
            //         {
            //             "Content-Type": "application/json;charset=utf-8"
            //         },
            //         body:JSON.stringify(
            //             {
            //                 'PostActivity_id':document.getElementById('activity_content_out').dataset.postactivity_id,
            //                 'Post_id':sessionStorage.getItem('Customer_id'),
            //                 'Comment':document.querySelector('.message_box').value
            //             }
            //         )
            //     })
            //     .then(function (response) {
            //     return response.json();
            //     })
            //     .then(function (body) {
            //         if(body == 1)
            //         {   
            //             document.getElementById('activity_message').innerHTML +=
            //             `
            //             <div class="activity__message_detail_out"  style="display: block;">
            //                 <div class="activity__message_detail">
            //                     <!-- 留言者照片 -->
            //                     <div class="activity__questioner_row">
            //                         <div class="activity__questioner_img for_hover_user_out" style="background-image: url(${'http://20.187.74.2/FileUpload/'+sessionStorage.getItem('Images')});" date-customer_id="${sessionStorage.getItem('Customer_id')}">
            //                             <!-- 滑過觀看使用者資料 -->
            //                             <div class="hover_user_out" id="hover_user_out">
            //                                 <!-- 頭貼／姓名／年齡/mail -->
            //                                 <div class="row_left">
            //                                     <div class="activity_author_img" style="background-image: url(${'http://20.187.74.2/FileUpload/'+sessionStorage.getItem('Images')});">
            //                                         <div class="male_icon">
            //                                             <p>${sessionStorage.getItem('Sex')}</p>
            //                                         </div>
            //                                     </div>
            //                                     <div class="add_person_content_box">
            //                                         <!--   姓名 年齡 -->
            //                                         <div class="add_person_content">
            //                                             <p class="add_add_person_name">
            //                                                 ${sessionStorage.getItem('Name')}
            //                                             </p>
            //                                             <p class="add_add_person_old">
            //                                                 ${(new Date().getFullYear())-sessionStorage.getItem('Birthday').substring(0,4)}
            //                                             </p>

            //                                         </div>
            //                                         <!-- email -->
            //                                         <div class="my_icon">
            //                                             <i class="fa-regular fa-envelope"></i>
            //                                             <p class="add_add_person_Email">
            //                                                 ${sessionStorage.getItem('Email')}
            //                                             </p>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div class="hover_user_about_me">
            //                                     <p>${sessionStorage.getItem('About_me')}</p>
            //                                 </div>

            //                                 <div class="post_activity_num">
            //                                     <a href="./user_personal.html?id=${sessionStorage.getItem('Customer_id')}" target="view_window">詳細資料</a>
            //                                 </div>

            //                             </div>
            //                         </div>
            //                         <!-- 留言者名稱內容 -->
            //                         <div class="activity__questioner_clo">
            //                             <p class="activity__questioner_name">${sessionStorage.getItem('Name')}</p>
            //                             <p class="activity__questioner_content">${document.querySelector('.message_box').value}</p>
            //                         </div>
            //                     </div>

            //                     <div class="activity__question_time">${(new Date(Date.now()+28800000)).toISOString().replace('T',' ').substring(0,19)}</div>

            //                 </div>

            //             </div>
            //             `
            //             document.querySelector('.message_box').value = ''

            //         }
            //         else
            //         {
            //             alert('發文失敗，內容不得空白')
            //         }
            //     })
            //     .catch(function(err){
            //         console.log(err)
            //     })

                
            // });



            let bool_see_all_message_box = false

            // 打開所有留言是否顯示
            if(document.querySelectorAll('.activity__message_detail_out').length<3)
            {
                $('.see_all_message_box').css('display', 'none');
            }


            // 打開所有留言
            $('.see_all_message_box').click(function (e) {
                e.preventDefault();
                if(bool_see_all_message_box == false)
                {   
                    $('.activity__message_detail_out').addClass('activity__message_detail_out_block');
                    $('.see_all_message').html('收合留言')
                    $('.see_all_message_box>i').css('transform', 'rotate(180deg)');
                    bool_see_all_message_box = true
                }
                else
                {
                    $('.activity__message_detail_out').removeClass('activity__message_detail_out_block');
                    $('.see_all_message').html('查看全部留言')
                    $('.see_all_message_box>i').css('transform', 'rotate(0deg)');
                    bool_see_all_message_box = false
                }
                
                
            });
            //檢視報名者資料之同意按鈕
            // $('.yes_btn').click(function (e) { 
            //     e.preventDefault();
            //     const this_yes_btn = this
            //     //console.log(document.querySelector(`.activity_card_box[data-postactivity_id="${document.querySelector('.activity_content_out').dataset.postactivity_id}"] .num-people p`).innerHTML)
            //     //console.log(document.getElementById('activity_content_out').dataset.poster_id)
            //     //console.log(this.parentNode.parentNode.childNodes[3].childNodes[1])
                
            //     if(confirm(`您確定讓 "${this.dataset.joiner_name}" 參加活動？`) == true)
            //     {
            //         fetch('http://20.187.74.2/api/Attend_count',{
            //             method:'PATCH',
            //             headers:
            //             {
            //                 "Content-Type": "application/json;charset=utf-8"
            //             },
            //             body:JSON.stringify(
            //                 {
            //                     'Attend_count_id':parseInt(this.dataset.attend_id),
            //                     'Customer_id':parseInt(document.getElementById('activity_content_out').dataset.poster_id)
            //                 }
            //             )
            //             })
            //             .then(function (response) {
            //                 return response.json();
            //             })
            //             .then(function (body) {
            //                 if(body == 1)
            //                 {
            //                     alert('參加成功')
            //                     this_yes_btn.parentNode.parentNode.childNodes[3].childNodes[1].style.border = '3px solid #21CD24'
            //                     this_yes_btn.innerHTML = '已參加'
            //                     this_yes_btn.classList.add('attend_btn')
            //                     this_yes_btn.classList.remove('yes_btn')
            //                     document.querySelector(`.activity_add_person_img[date-customer_id="${this_yes_btn.dataset.joiner_id}"]`).style.border = '3px solid #21CD24'
            //                     document.querySelector('.activity_add_person_num').innerHTML = parseInt(document.querySelector('.activity_add_person_num').innerHTML)+1
            //                     document.querySelector(`.activity_card_box[data-postactivity_id="${document.querySelector('.activity_content_out').dataset.postactivity_id}"] .num-people`).childNodes[3].innerHTML = parseInt(document.querySelector(`.activity_card_box[data-postactivity_id="${document.querySelector('.activity_content_out').dataset.postactivity_id}"] .num-people`).childNodes[3].innerHTML)+1
            //                 }
            //                 else
            //                 {
            //                     alert('參加失敗，超過報名人數')
            //                 }
            //             })
            //             .catch(function(err){
            //                 console.log(err)
            //             })
            //     }
                
            // });
        })
        .catch(function(err){
            console.log(err)
        })
    });

})








