!function(l){function q(c,g){var h=document,m="body",i=function(){},n={},j=0,k=1;!c.pop&&(c=[c]);!g&&(g=i);function r(d,e,o,f){f=h.createElement("script");j++;f.onload=f.onreadystatechange=function(a,b){b=0,a=this.readyState||a.type;if(a=="loaded"||a=="complete"||a=="load"){o?(d=function(){l[o]?p(e):setTimeout(d,k);++b>k&&(d=i)})():p(e)}};f.async=!0;f.src=d;h[m].appendChild(f)}function p(a){!--j&&g()+a()}!function s(a,b,d,e){if(!h[m])return setTimeout(s,k);b=h.getElementsByTagName("script");e=i;for(a in b)b[a].src&&(n[b[a].src]=a);for(a in c)c[a].pop?(b=c[a][0],e=c[a][1],d=c[a][2]):(b=c[a]),n[b]?e():r(b,e,d);!j&&g()}()}l.include=q}(this)