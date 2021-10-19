webpackJsonp([1],{0:function(t,e){},"2EPs":function(t,e,i){"use strict";var s=i("EjQ4"),a=i("yL53"),n={name:"blogs",data:function(){return{blogs:[],alert:""}},components:{MainNav:s.a,Alert:a.a},methods:{fetchPosts:function(){this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(t){this.blogs=t.body,console.log(this.blogs)})},deletePost:function(t){this.$http.delete("https://jsonplaceholder.typicode.com/posts/"+t).then(function(e){this.post=e.body,this.alert="Post with id "+t+" deleted !",console.log(this.post)})}},created:function(){this.fetchPosts()}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blogs container"},[i("MainNav"),t._v(" "),i("h1",[t._v("All Posts")]),t._v(" "),t.alert?i("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),i("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),i("tbody",t._l(t.blogs,function(e){return i("tr",[i("td",[t._v(t._s(e.id))]),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.title))]),t._v(" "),i("td",[t._v(t._s(e.body))]),t._v(" "),i("td",{attrs:{colspan:"2"}},[i("div",{staticClass:"btn-group"},[i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/edit/post/"+e.id}},[t._v("Edit")]),t._v(" "),i("input",{staticClass:"btn btn-danger",attrs:{type:"button",value:"Delete"},on:{click:function(i){t.deletePost(e.id)}}})],1)])])}))])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("th",[t._v("Post Id")]),t._v(" "),i("th",[t._v("Posted By")]),t._v(" "),i("th",[t._v("Post Title")]),t._v(" "),i("th",[t._v("Post")]),t._v(" "),i("th",[t._v("Actions")])])}]};var r=i("VU/8")(n,o,!1,function(t){i("SLP2")},"data-v-7b9b0517",null);e.a=r.exports},"6wEh":function(t,e,i){"use strict";var s={name:"postDetails",data:function(){return{post:""}},components:{MainNav:i("EjQ4").a},methods:{fetchPost:function(t){this.$http.get("https://jsonplaceholder.typicode.com/posts/"+t).then(function(t){this.post=t.body,console.log(this.post)})}},created:function(){this.fetchPost(this.$route.params.id)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"postDetails"},[i("div",{staticClass:"container"},[i("MainNav"),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"blog-post"},[i("h2",{staticClass:"blog-post-title",staticStyle:{"margin-top":"10px","margin-bottom":"20px"}},[t._v(t._s(t.post.title))]),t._v(" "),i("p",[t._v(t._s(t.post.body))])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"30px","margin-bottom":"20px"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"http://placekitten.com/g/1200/400",alt:"company logo"}})])}]};var n=i("VU/8")(s,a,!1,function(t){i("FSwD")},"data-v-de5a8fb8",null);e.a=n.exports},AWdy:function(t,e,i){"use strict";var s=i("EjQ4"),a=i("yL53"),n={name:"editpost",data:function(){return{post:{},alert:""}},components:{MainNav:s.a,Alert:a.a},methods:{fetchPost:function(t){this.$http.get("https://jsonplaceholder.typicode.com/posts/"+t).then(function(t){this.post=t.body})},updatePost:function(t){if(console.log("Form has been Submitted"),this.post.title&&this.post.body){this.post.title,this.post.body;this.$http.put("https://jsonplaceholder.typicode.com/posts/"+id,updatedPost).then(function(t){this.alert="Post Updated!",console.log(t.body)}),t.preventDefault()}else console.log("Please fill in all required fields");t.preventDefault()}},created:function(){this.fetchPost(this.$route.params.id)}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"editpost"},[i("div",{staticClass:"container"},[i("MainNav"),t._v(" "),i("h1",[t._v("Edit Post")]),t._v(" "),i("hr"),t._v(" "),t.alert?i("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),i("form",{on:{submit:t.updatePost}},[i("div",{staticClass:"form-group"},[i("label",[t._v("Post Title")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Post Title",required:""},domProps:{value:t.post.title}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Post Body")]),t._v(" "),i("textarea",{staticClass:"form-control",attrs:{rows:"5",placeholder:"Enter your Post here",required:""},domProps:{value:t.post.body}})]),t._v(" "),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])],1)])},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("y4mb")},"data-v-34c659f4",null);e.a=r.exports},DoRh:function(t,e,i){"use strict";var s=i("EjQ4"),a=i("pFYg"),n=i.n(a),o=i("woOf"),r=i.n(o),l=i("hiCB"),c=i.n(l),h={name:"picture-input",props:{width:{type:[String,Number],default:c.a},height:{type:[String,Number],default:c.a},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:c.a},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:function(){return{}}},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:function(){return{}}}},watch:{prefill:function(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:function(){return{imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}},mounted:function(){var t=this;if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(function(){window.addEventListener("resize",t.onResize),t.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);var e=this.$refs.previewCanvas;e.getContext&&(this.context=e.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(function(t){return t.trim()})),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings:function(){for(var t in this.customStrings)t in this.strings&&"string"==typeof this.customStrings[t]&&(this.strings[t]=this.customStrings[t])},onClick:function(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize:function(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart:function(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop:function(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop:function(t){this.onDragStop(),this.onFileChange(t)},onFileChange:function(t,e){var i=t.target.files||t.dataTransfer.files;if(i.length)if(i[0].size<=0||i[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(i[0].name!==this.fileName||i[0].size!==this.fileSize||this.fileModified!==i[0].lastModified){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type,"image/*"===this.accept){if("image/"!==i[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(i[0].type))return void this.$emit("error",{type:"fileType",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],e||!1):e?this.$emit("prefill"):this.$emit("change",this.image)}},onError:function(t){this.alertOnError&&alert(t.message)},loadImage:function(t,e){var i=this;this.getEXIFOrientation(t,function(s){i.setOrientation(s);var a=new FileReader;a.onload=function(t){i.image=t.target.result,e?i.$emit("prefill"):i.$emit("change",i.image),i.imageObject=new Image,i.imageObject.onload=function(){i.autoToggleAspectRatio&&(i.getOrientation(i.canvasWidth,i.canvasHeight)!==i.getOrientation(i.imageObject.width,i.imageObject.height)&&i.rotateCanvas());i.drawImage(i.imageObject)},i.imageObject.src=i.image},a.readAsDataURL(t)})},drawImage:function(t){this.imageWidth=t.width,this.imageHeight=t.height,this.imageRatio=t.width/t.height;var e=0,i=0,s=this.previewWidth,a=this.previewHeight,n=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=n?(s=a*this.imageRatio,e=(this.previewWidth-s)/2):(a=s/this.imageRatio,i=(this.previewHeight-a)/2):this.imageRatio>=n?(a=s/this.imageRatio,i=(this.previewHeight-a)/2):(s=a*this.imageRatio,e=(this.previewWidth-s)/2);var o=this.$refs.previewCanvas;o.style.background="none",o.width=this.previewWidth*this.pixelRatio,o.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,o.width,o.height),this.rotate&&(this.context.translate(e*this.pixelRatio,i*this.pixelRatio),this.context.translate(s/2*this.pixelRatio,a/2*this.pixelRatio),this.context.rotate(this.rotate),e=-s/2,i=-a/2),this.context.drawImage(t,e*this.pixelRatio,i*this.pixelRatio,s*this.pixelRatio,a*this.pixelRatio)},selectImage:function(){this.$refs.fileInput.click()},removeImage:function(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage:function(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);var t=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",t)},resizeCanvas:function(){var t=this.canvasWidth/this.canvasHeight,e=this.$refs.container.clientWidth;(this.toggleAspectRatio||e!==this.containerWidth)&&(this.containerWidth=e,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/t)},getOrientation:function(t,e){var i="square";return t>e?i="landscape":t<e&&(i="portrait"),i},switchCanvasOrientation:function(){var t=this.canvasWidth,e=this.canvasHeight;this.canvasWidth=e,this.canvasHeight=t},rotateCanvas:function(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation:function(t){this.rotate=!1,8===t?this.rotate=-Math.PI/2:6===t?this.rotate=Math.PI/2:3===t&&(this.rotate=-Math.PI)},getEXIFOrientation:function(t,e){var i=new FileReader;i.onload=function(t){var i=new DataView(t.target.result);if(65496!==i.getUint16(0,!1))return e(-2);for(var s=i.byteLength,a=2;a<s;){var n=i.getUint16(a,!1);if(a+=2,65505===n){if(1165519206!==i.getUint32(a+=2,!1))return e(-1);var o=18761===i.getUint16(a+=6,!1);a+=i.getUint32(a+4,o);var r=i.getUint16(a,o);a+=2;for(var l=0;l<r;l++)if(274===i.getUint16(a+12*l,o))return e(i.getUint16(a+12*l+8,o))}else{if(65280!=(65280&n))break;a+=i.getUint16(a,!1)}}return e(-1)},i.readAsArrayBuffer(t.slice(0,65536))},preloadImage:function(t,e){var i=this;if(e=r()({},e),"object"===(void 0===t?"undefined":n()(t)))return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(t,!0):this.$emit("prefill"));var s=new Headers;s.append("Accept","image/*"),fetch(t,{method:"GET",mode:"cors",headers:s}).then(function(t){return t.blob()}).then(function(s){var a={target:{files:[]}},n=e.fileName||t.split("/").slice(-1)[0],o=e.mediaType||"image/"+(e.fileType||n.split(".").slice(-1)[0]);o=o.replace("jpg","jpeg"),a.target.files[0]=new File([s],n,{type:o}),i.onFileChange(a,!0)}).catch(function(t){i.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+t})})}},computed:{supportsUpload:function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var t=document.createElement("input");return t.type="file",!t.disabled},supportsPreview:function(){return window.FileReader&&!!window.CanvasRenderingContext2D},supportsDragAndDrop:function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses:function(){var t={};return t["dragging-over"]=this.draggingOver,t},fontSize:function(){return Math.min(.04*this.previewWidth,21)+"px"}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[t.supportsUpload?t.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:t.previewWidth+"px",height:t.previewHeight+"px",borderRadius:t.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:t.computedClasses,style:{height:t.previewHeight+"px",zIndex:t.zIndex+1},on:{drag:function(t){t.stopPropagation(),t.preventDefault()},dragover:function(t){t.stopPropagation(),t.preventDefault()},dragstart:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStart(e)},dragenter:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStart(e)},dragend:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStop(e)},dragleave:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStop(e)},drop:function(e){e.stopPropagation(),e.preventDefault(),t.onFileDrop(e)},click:function(e){e.preventDefault(),t.onClick(e)}}}),t._v(" "),t.imageSelected||t.plain?t._e():i("div",{staticClass:"picture-inner",style:{top:-t.previewHeight+"px",marginBottom:-t.previewHeight+"px",fontSize:t.fontSize,borderRadius:t.radius+"%",zIndex:t.zIndex+2}},[t.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:t._s(t.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:t._s(t.strings.tap)}})])]),t._v(" "),t.imageSelected&&!t.hideChangeButton?i("button",{class:t.buttonClass,on:{click:function(e){e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.change))]):t._e(),t._v(" "),t.imageSelected&&t.removable?i("button",{class:t.removeButtonClass,on:{click:function(e){e.preventDefault(),t.removeImage(e)}}},[t._v(t._s(t.strings.remove))]):t._e(),t._v(" "),t.imageSelected&&t.toggleAspectRatio&&t.width!==t.height?i("button",{class:t.aspectButtonClass,on:{click:function(e){e.preventDefault(),t.rotateImage(e)}}},[t._v(t._s(t.strings.aspect))]):t._e()]):i("div",[t.imageSelected?i("div",[i("div",{domProps:{innerHTML:t._s(t.strings.selected)}}),t._v(" "),t.hideChangeButton?t._e():i("button",{class:t.buttonClass,on:{click:function(e){e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.change))]),t._v(" "),t.removable?i("button",{class:t.removeButtonClass,on:{click:function(e){e.preventDefault(),t.removeImage(e)}}},[t._v(t._s(t.strings.remove))]):t._e()]):i("button",{class:t.buttonClass,on:{click:function(e){e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.select))])]):i("div",{domProps:{innerHTML:t._s(t.strings.upload)}}),t._v(" "),i("input",{ref:"fileInput",attrs:{type:"file",name:t.name,id:t.id,accept:t.accept},on:{change:t.onFileChange}})])},staticRenderFns:[]};var d=i("VU/8")(h,p,!1,function(t){i("F2Cz")},"data-v-186d4010",null).exports,u=i("yL53"),f={name:"addpost",data:function(){return{post:{},alert:""}},components:{MainNav:s.a,PictureInput:d,Alert:u.a},methods:{onChange:function(t){console.log("New picture selected!"),t?(console.log("Picture loaded."),this.image=t):console.log("FileReader API not supported: use the <form>, Luke!")},createPost:function(t){if(console.log("Form has been Submitted"),this.post.title&&this.post.body){var e={title:this.post.title,body:this.post.body,post_image:this.image};this.$http.post("https://jsonplaceholder.typicode.com/posts",e).then(function(t){this.alert="New Post Created !",console.log(e)}),t.preventDefault()}else console.log("Please fill in all required fields");t.preventDefault()}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"addpost"},[i("div",{staticClass:"container"},[i("MainNav"),t._v(" "),i("h1",[t._v("Add New Post")]),t._v(" "),i("hr"),t._v(" "),t.alert?i("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),i("form",{on:{submit:t.createPost}},[i("div",{staticClass:"form-group"},[i("label",[t._v("Post Image")]),t._v(" "),i("picture-input",{ref:"pictureInput",attrs:{crop:!1,width:"200",removable:!0,hideChangeButton:!0,toggleAspectRatio:!0,height:"200",margin:"16",name:"postImage",id:"postImage",accept:"image/jpeg,image/png",size:"10",buttonClass:"btn",removeButtonClass:"btn btn-secondary",customStrings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported.",aspect:"Landscape/Portrait"}},on:{change:t.onChange},model:{value:t.post.image,callback:function(e){t.$set(t.post,"image",e)},expression:"post.image"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Post Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Post Title",required:""},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Post Body")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5",placeholder:"Enter your Post here",required:""},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})]),t._v(" "),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])],1)])},staticRenderFns:[]};var g=i("VU/8")(f,v,!1,function(t){i("QxqZ")},"data-v-67876aae",null);e.a=g.exports},EjQ4:function(t,e,i){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MainNav"},[e("header",{staticClass:"blog-header py-3"},[e("div",{staticClass:"row flex-nowrap justify-content-between align-items-center"},[e("div",{staticClass:"col-4 pt-1"},[e("a",{staticClass:"text-muted",attrs:{href:"/admin/posts"}},[this._v("Manage Posts")])]),this._v(" "),e("div",{staticClass:"col-4 text-center"},[e("a",{staticClass:"blog-header-logo text-dark",attrs:{href:"/"}},[this._v("News Centa Blogs")])]),this._v(" "),e("div",{staticClass:"col-4 d-flex justify-content-end align-items-center"},[e("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"/new/post"}},[this._v(" New Post")])])])]),this._v(" "),e("hr")])}]};var a=i("VU/8")({name:"MainNav"},s,!1,function(t){i("vh/r")},"data-v-b03f7c7c",null);e.a=a.exports},F2Cz:function(t,e){},FSwD:function(t,e){},M93x:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("users")],1)},staticRenderFns:[]};i("VU/8")({name:"App",components:{}},s,!1,function(t){i("eYcT")},null,null).exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=i("7+uW"),s=i("/ocq"),a=i("8+8L"),n=(i("M93x"),i("oTnh")),o=i("qbhH"),r=i("DoRh"),l=i("6wEh"),c=i("2EPs"),h=i("AWdy");e.a.config.productionTip=!1,e.a.use(a.a),e.a.use(s.a);var p=new s.a({mode:"history",base:t,routes:[{path:"/",component:n.a},{path:"/admin",component:o.a},{path:"/admin/posts",component:c.a},{path:"/new/post",component:r.a},{path:"/post/:id",component:l.a},{path:"/edit/post/:id",component:h.a}]});new e.a({router:p,template:'\n  <div id="app">\n     <router-view></router-view>\n  </div>'}).$mount("#app")}.call(e,"/")},QxqZ:function(t,e){},SLP2:function(t,e){},aXaT:function(t,e){},eYcT:function(t,e){},hoNS:function(t,e){},oTnh:function(t,e,i){"use strict";var s={name:"blogs",data:function(){return{blogs:[]}},components:{MainNav:i("EjQ4").a},methods:{fetchBlogs:function(){this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(t){this.blogs=t.body,console.log(this.blogs)})}},created:function(){this.fetchBlogs()}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blogs"},[i("div",{staticClass:"container"},[i("MainNav"),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"row mb-2"},t._l(t.blogs.slice(0,6),function(e){return i("div",{staticClass:"col-md-6 blog"},[i("div",{staticClass:"card flex-md-row mb-4 box-shadow h-md-250"},[i("div",{staticClass:"card-body d-flex flex-column align-items-start"},[i("h5",{staticClass:"mb-0"},[i("a",{staticClass:"text-dark",attrs:{href:"/post/"+e.id}},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"mb-1 text-muted"},[t._v(t._s(e.post_date))]),t._v(" "),i("p",{staticClass:"card-text mb-auto"},[t._v(t._s(e.body.slice(0,100)))]),t._v(" "),i("a",{attrs:{href:"/post/"+e.id}},[t._v("Continue reading")])]),t._v(" "),i("img",{staticClass:"card-img-right flex-auto d-none d-md-block",attrs:{src:"http://via.placeholder.com/200x250",alt:"Card image cap"}})])])}))],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron p-3 p-md-5 text-white rounded bg-dark"},[e("div",{staticClass:"col-md-6 px-0"},[e("h1",{staticClass:"display-4 font-italic"},[this._v("Title of a longer featured blog post")]),this._v(" "),e("p",{staticClass:"lead my-3"},[this._v("Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.")]),this._v(" "),e("p",{staticClass:"lead mb-0"},[e("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"}},[this._v("Continue reading...")])])])])}]};var n=i("VU/8")(s,a,!1,function(t){i("ws/L")},"data-v-1e9a968e",null);e.a=n.exports},qbhH:function(t,e,i){"use strict";var s={name:"adminDashboard",data:function(){return{}},components:{MainNav:i("EjQ4").a}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"adminDashboard"},[e("div",{staticClass:"container"},[e("MainNav"),this._v(" "),e("h1",[this._v("Admin")])],1)])},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("hoNS")},"data-v-cf5a4626",null);e.a=n.exports},"vh/r":function(t,e){},"ws/L":function(t,e){},y4mb:function(t,e){},yL53:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alerts"},[e("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[this._v("\n          "+this._s(this.message)+"\n          "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var a=i("VU/8")({name:"alerts",props:["message"],data:function(){return{}}},s,!1,function(t){i("aXaT")},"data-v-96f218da",null);e.a=a.exports}},["NHnr"]);
//# sourceMappingURL=app.bf14e854fb6c49f5eead.js.map