const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner">


    <div style="text-align:-webkit-center;">
        <div  style="border:1px solid #000;max-width:570px;padding:10px">
          <span class="timer" style="font-weight:bold;font-size:20px;">
              [ 신청 마감 | <span id="day1" style="font-weight:bold;"></span> ]<br>[ <span id="countdown1" style="font-weight:bold;"></span>]
          </span><br><br>
         <b style="font-size:20px;">현재  [ <span class="counter blink" style="bottom:0px;font-weight:bold;color:blue;">7</span> / 150 명 ] 남았습니다.</b>
      </a></div></div><br><br><br>
    <h1 class="form-top-title">특별 이벤트 & 무료 전화 상담 신청하기</h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
          <input type="hidden" name="entry.272078534" value="onepage">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr id="select_lic">
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->성별<br></th>
                            <td>

                                <select name='entry.1818522882' id='mf' class="form-control" placeholder="성별">

                                    <option value="성별" selected disabled>성별 선택</option>
                                        <option value="여성">여성</option>
                                        <option value="남성">남성</option>
                                        
                                      
                                </select>

                           
                            </td>
                        </tr>
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.583978956' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                  
                    <tr>
                        <th>연령</th>
                        <td>
                            <input type='text' name='entry.1881318671' id='age' class="form-control" placeholder="연령" maxlength="2">
                           
                        </td>
                    </tr>
                  
            <tr>
              <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
              <td>
                  <input type='text' name='entry.576088086' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
              </td>
          </tr>
                    <!-- <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr> -->
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.1817436242' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr>
                   
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 상담 신청하기' disabled >
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="width:20px;">
                                        <label style="color:#000; font-weight:500;font-size:13px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:#000;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>




<section id="dbscf" style="display:none;">
  <form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/site17/ifr/ifr_save.php" target="hidden_iframe12">
  <input type="hidden" name="ms" value="S00211145V" />
		<input type="hidden" name="ca" value="C05052301J" />
		<input type="hidden" name="auto_defense" />




<div style="font-size: 21px;" class="input_title"><span>이름</span><input type="text" name="name" style="width:30%;" /></div>
<div style="font-size: 21px;" class="input_title"><span>성별</span>
<input type="radio" name="sex" id="female" value="여" style="margin:0 0; vertical-align:middle;" /><label for="female" style="margin-right:10px;">여성</label>
<input type="radio" value="남" name="sex" id="male" style="margin:0 0; vertical-align:middle;" /><label for="male">남성</label></div>
<div style="font-size: 21px;" class="input_title"><span>나이</span><input type="text" name="age" maxlength="2" style="width:20%;" />세</div>
<div style="font-size: 21px;" class="input_title"><span>연락처</span>
	<select type="text" name="tel1" style="width:20%; border:none; border-bottom:1px solid #ccc;" >
		<option value="010">010</option>
		<option value="011">011</option>
		<option value="016">016</option>
		<option value="017">017</option>
		<option value="018">018</option>
		<option value="019">019</option>
	</select>-
	<input type="text" name="tel2" style="width:20%;" maxlength="4" />-
	<input type="text" name="tel3" style="width:20%;" maxlength="4" />
</div>
<div style="font-size: 21px;" class="input_title"><span>문의사항</span><textarea name="etc" style="margin-top:10px" class="textarea_box"></textarea></div>


	<div style="font-size:0.7em;"><input type="checkbox" name="agree" id="agreement"  style="margin:0 0; vertical-align:middle;" checked/><label for="agreement">개인정보 취급 동의</label><a href="javascript:dbdb_pri_popup();">[보기]</a>

    </form>

<div class="footer_btn">
<a href="#" onclick="javascript:OnSubmit();">



<img src="images/dbform_request_btn.png" />	

</a>

</div>

</div>

</div>
  </section>
  </form>
  
  
  </section>

  <div class="wrap linkWrap">
  <div class="sec00 contents" style="padding-top:60px;">
      <div class="inner">
      <p>
         <span id="day2" style="color:#333;"></span><br>
          현재 <span class="counter blink" style="bottom:0px;">7</span> / 150 명 남았습니다.
      </p>
      <div class="box_02">
          <div class="box_02_1">
              <div style="position:relative;height:150px;overflow:hidden;">
                  <div id="ticker_wrap" style="position: absolute;top:0px;right:0px;width:100%;">
                      <table id="ticker" class="tg">
                      <tbody>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">55세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">50세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">66세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">45세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">42세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">51세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">49세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">38세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">47세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
      </div>
  </div>
</div>

`;

document.body.appendChild(form.content);