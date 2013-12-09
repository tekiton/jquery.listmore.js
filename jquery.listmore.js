/**
 * jQuery List More
 * 
 * @author tekiton
 * @license MIT License :)
 */
(function($) {

	jQuery.fn.listmore = function(option){
		
		option = $.extend({
			article: null,
			more   : null,
			close  : null,
			count  : null,
			savekey: null
		}, option);
		
		var path = location.pathname + location.search;
		
		var loadOpenedMorelist = function(returnAllData){
			var list = sessionStorage.getItem('openedMorelist');
			if(!list){
				list = {};
			}else{
				list = JSON.parse(list);
			}
			if(returnAllData) return list;
			return list[path]? list[path]: [];
		};
		
		var saveOpenedMorelist = function(list){
			var allData = loadOpenedMorelist(true);
			allData[path] = list;
			sessionStorage.setItem('openedMorelist', JSON.stringify(allData));
		};
		
		var addOpenedMorelist = function(listKey){
			var list = loadOpenedMorelist();
			if($.inArray(listKey, list) === -1){
				list.push(listKey);
			}
			saveOpenedMorelist(list);
		};
		
		var removeOpenedMorelist = function(listKey){
			var list = loadOpenedMorelist();
			if(!list.length) return;
			var index = $.inArray(listKey, list);
			if(index!== -1){
				list.splice(index, 1);
			}
			saveOpenedMorelist(list);
		};
		
		var existsOpenedMorelist = function(listKey){
			var list = loadOpenedMorelist();
			if(!list.length) return;
			var index = $.inArray(listKey, list);
			return (index!== -1);
		};
		
		return this.each(function(i){
			
			var $wrap    = $(this)
			var $article = option.article? $(option.article): $wrap.find('li');
			var $more    = option.more   ? $(option.more)   : $wrap.next().find('.list_more');
			var $close   = option.close  ? $(option.close)  : $wrap.next().find('.list_close');
			var defaultHeight = $wrap.height();
			var defaultLength = $article.filter(':visible').length;
			var nextLength    = option.count? option.count: defaultLength;
			var savekey       = option.savekey + '_' + i;
			
			var more = function(duration){
				
				var $hiddenArticle = $article.filter(':hidden');
				
				if($hiddenArticle.length < nextLength || option.savekey){
					$hiddenArticle.show();
				}else{
					$hiddenArticle.filter(':lt('+ nextLength +')').show();
				}
				
				if($hiddenArticle.length <= nextLength || option.savekey){
					$more.hide();
					$close.show();
				}
				
				var oldHeight = $wrap.height();
				var newHeight = $wrap.height('').height();
				$wrap.height(oldHeight);
				$wrap.animate({ height:newHeight }, duration);
				
				if(option.savekey){
					addOpenedMorelist(option.savekey+'_'+i);
				}
			};
		
			var close = function(){
				
				$('html, body').animate({ scrollTop:$wrap.offset().top }, {
					duration : 300,
					easing   : 'swing'
				});
				
				$wrap.animate({ height:defaultHeight }, function(){
					$article.filter(':gt('+ (defaultLength-1) +')').hide();
				});
				$more.show();
				$close.hide();
				
				if(option.savekey){
					removeOpenedMorelist(savekey);
				}
				
			};
		
			if($article.length){
				
				$more.show();
				$wrap.height(defaultHeight);
				$more.click(more);
				$close.click(close);
				
				if(savekey && existsOpenedMorelist(savekey)){
					more(0);
				}
				
			}
		
		});

	};

})(jQuery);

