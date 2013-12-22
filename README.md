jquery.listmore.js
===================

何これ？
--------
長いリストに「もっと見る」ボタンをつけるためのjQueryプラグインです。これまた2番煎じ感が満載だけど気にしない。  
Ajaxで都度読み込むのではなく、完全に見た目だけの実装です。  
個人的には、なんだか違和感があるのですが、こういう要望多いんですよね……。


使い方
------
jquery.listmore.jsを読み込んで、長いリストを指定します。

* HTML
```html
<div class="list">
	<ul>
		<li><span>2013-12-22</span>テキストテキスト</li>
		<li><span>2013-12-21</span>テキストテキスト</li>
		<li><span>2013-12-20</span>テキストテキスト</li>
		<li><span>2013-12-19</span>テキストテキスト</li>
		<li><span>2013-12-18</span>テキストテキスト</li>
		<li><span>2013-12-17</span>テキストテキスト</li>
		<li><span>2013-12-16</span>テキストテキスト</li>
		<li><span>2013-12-15</span>テキストテキスト</li>
		<li><span>2013-12-14</span>テキストテキスト</li>
		<li><span>2013-12-13</span>テキストテキスト</li>
		<li><span>2013-12-12</span>テキストテキスト</li>
		<li><span>2013-12-11</span>テキストテキスト</li>
		<li><span>2013-12-10</span>テキストテキスト</li>
		<li><span>2013-12-09</span>テキストテキスト</li>
		<li><span>2013-12-08</span>テキストテキスト</li>
		<li><span>2013-12-07</span>テキストテキスト</li>
	</ul>
</div>
<div class="list_control">
	<div class="list_more">もっと見る</div>
	<div class="list_close">閉じる</div>
</div>
```

* JS
```javascript
$(function(){
	$('.list').listmore({ /* option */ });
});
```


オプション
----------
listmore() を実行する際、引数を与えることで動作の設定変更ができます。

* count:integer  
  最初に何件表示しておくか＆何件ずつ表示するか。

* article:string / jQuery Object / DOM Object  
  li以外の要素を追加表示したい場合に指定できます。

* more:string / jQuery Object / DOM Object  
  いわゆる「もっと見る」ボタン。  
  デフォルトでは、対象要素の次の要素の中にある .list_more です。

* close:string / jQuery Object / DOM Object  
  最後まで表示しきった際に出てくる「閉じる」ボタン。  
  デフォルトでは、対象要素の次の要素の中にある .list_close です。

* savekey:string
  これを指定すると、sessionStrageを使って、開いた状態を保持します。  
  ブラウザの戻る/進む/更新を行っても、既に開いていれば開きっぱなしになります。  
  （当時の案件の）仕様により、「もっと見る」というより「全件表示する」動作になります。


動作確認済みブラウザ
--------------------
* Internet Explorer 8+
* Google Chrome
* Firefox

多分最新のブラウザなら大丈夫。IE8未満では動きません。


ライセンス
----------
This is MIT LICENSE :)

