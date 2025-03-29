<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'PingFang SC'; -webkit-text-stroke: #000000}
    span.s1 {font-kerning: none}
    span.s2 {font: 12.0px 'PingFang SC'; font-kerning: none}
    span.s3 {font: 12.0px Helvetica; font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">async function sendMessage() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const userInput = document.getElementById('userInput');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const chatBox = document.getElementById('chatBox');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!userInput.value.trim()) return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// </span><span class="s2">显示用户的消息</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const userMessage = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>userMessage.className = 'chat-message user';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>userMessage.textContent = userInput.value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatBox.appendChild(userMessage);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span>// </span><span class="s1">清空输入框并滚动到底部</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatBox.scrollTop = chatBox.scrollHeight;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const message = userInput.value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>userInput.value = '';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// </span><span class="s2">显示加载消息</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const loadingMessage = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>loadingMessage.className = 'chat-message assistant';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>loadingMessage.textContent = 'Generating your itinerary...';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatBox.appendChild(loadingMessage);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatBox.scrollTop = chatBox.scrollHeight;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// </span><span class="s2">调用你的</span><span class="s1">DeepSeek API</span><span class="s2">接口（以下为示例，实际中请使用后端封装以保护</span><span class="s1">API Key</span><span class="s2">）</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const response = await fetch('https://api.deepseek.com/chat/completions', {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>method: 'POST',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>headers: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>'Content-Type': 'application/json',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>'Authorization': 'Bearer YOUR_DEEPSEEK_API_KEY'</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>body: JSON.stringify({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>model: 'deepseek-chat',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>messages: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>{role: 'system', content: 'You are a helpful travel assistant.'},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>{role: 'user', content: message}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>temperature: 0.7</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const data = await response.json();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>loadingMessage.textContent = data.choices[0].message.content;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} catch (error) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>loadingMessage.textContent = 'Sorry, something went wrong. Please try again.';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.error(error);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// </span><span class="s2">滚动到底部</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatBox.scrollTop = chatBox.scrollHeight;</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
