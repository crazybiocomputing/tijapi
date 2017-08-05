// JSON
var new_image_bis={
  "id" : "new_image",
  "legend": "New Image...",
  "fieldset" : [
      {
        "type": "input_text",
        "label": "Name",
        "value": "Untitled"
      },
      {
        "type": "select",
        "label": "Type",
        "value": ["8-bit","16-bit","32-bit","RGB"]
      },
      {
        "type": "select",
        "label": "Fill with",
        "value": ["Black","White", "Ramp", "Random","Chessboard"]
      },
      {
        "type": "input_number",
        "label": "Width",
        "value": 128,
        "suffix": "pixels"
      },
      {
        "type": "input_number",
        "label": "Height",
        "value": 128,
        "suffix": "pixels"
      },
      {
        "type": "input_number",
        "label": "Slices",
        "value": 1
      }
    ]
  };

var b_and_c ={
    "id": "b_and_c",
    "legend":  "B&C",
    "fieldset": [
      {
        "type": "graph"
      },
      {
        "type": "input_range",
        "label": "Minimum",
        "min":0,
        "max":255,
        "value": 0
      },
      {
        "type": "input_range",
        "label": "Maximum",
        "min":0,
        "max":255,
        "value": 0
      },
      {
        "type": "input_range",
        "label": "Brightness",
        "min":0,
        "max":255,
        "value": 0
      },
      {
        "type": "input_range",
        "label": "Contrast",
        "min":0,
        "max":255,
        "value": 0
      },
      {
        "type": "row",
        "children": [
          {
            "type": "button",
            "label": "Auto"
          },
          {
            "type": "button",
            "label": "Reset"
          }
        ]
      },
      {
        "type": "button",
        "label": "Set",
        "value": "submit"
      },
      {
        "type": "button",
        "label": "Apply",
        "value": "submit"
      }
    ]
  };

 var filter= {
    "id": "filter",
    "legend": "{{title}}",
    "fieldset": [
      {
        "type"  : "input_number",
        "label" : "Radius",
        "value" : 2.0,
        "suffix": "pixels"
      },
      {
        "type": "input_checkbox",
        "label": "Preview",
        "id":"preview"
      }
    ]
  };

var math= {
    "id": "math",
    "legend":  "Math",
    "fieldset": [
      {
        "type": "tab",
        "label": "Arithmetic",
        "children" : [
          {
            "type": "select",
            "label": "Op.",
            "value": ["Add","Subtract","Multiply","Divide","AND","OR","XOR","Min","Max","Gamma","Set"]
          },
          {
            "type": "input_number",
            "value": 128
          },
          {
            "type": "input_checkbox",
            "label": "Preview",
            "id": "preview"
          },
        ]
      },
      {
        "type": "tab",
        "label": "Arithmetic",
        "children" : [
          {
            "type": "select",
            "label": "Op.",
            "value": ["Abs","Log","Exp","Square", "SquareRoot","NaN Background","Reciprocal"]
          }
        ]
      }
    ]
  };

var new_image =   {
  "id" : "new_image",
  "legend": "New Image...",
  "fieldset" : [
    {
        "type": "tab",
        "label": "New Image...",
        "children" : [
      {
        "type": "input_text",
        "label": "Name",
        "id":"name",
        "value": "Untitled"
      },
      {
        "type": "select",
        "label": "Type",
        "id":"type",
        "value": ["8-bit","16-bit","32-bit","RGB"]
      },
      {
        "type": "select",
        "label": "Fill",
        "id":"fill",
        "value": ["Black","White", "Ramp", "Random","Chessboard"]
      },
      {
        "type": "input_number",
        "label": "Width",
        "id":"width",
        "value": 128,
        "suffix": "px"
      },
      {
        "type": "input_number",
        "label": "Height",
        "id":"height",
        "value": 128,
        "suffix": "px"
      },
      {
        "type": "input_number",
        "label": "Slices",
        "id":"slices",
        "value": 1
      },
      {
        "type":"input_checkbox",
        "label":"Preview",
        "id":"preview",
      },
      {
        "type":"input_checkbox",
        "label":"test",
        "id":"testing",
      },
      {
        "type":"input_radio",
        "id":"radio",
        "label":"test radio",
        "value":"test2"
      },
      {
        "type":"input_range",
        "id":"range",
        "label":"test slider",
        "value":[0,255,1]
      },
      {
        "label":"B&C",
        "type":"svg",
        "id":"svg",
      }]
    },
      {
        "type": "tab",
        "label": "Arithmetic",
        "children" : [
          {
            "type": "select",
            "label": "Op.",
            "value": ["Add","Subtract","Multiply","Divide","AND","OR","XOR","Min","Max","Gamma","Set"]
          },
          {
            "type": "input_number",
            "value": 128
          },
          {
            "type": "input_checkbox",
            "label": "Preview",
            "id": "preview"
          },
        ]
      },
      {
        "type": "tab",
        "label": "Arithmetic",
        "children" : [
          {
            "type": "select",
            "label": "Op.",
            "value": ["Abs","Log","Exp","Square", "SquareRoot","NaN Background","Reciprocal"]
          }
        ]
      }
    ]
  };
var channels =   {
  "id" : "channels",
  "legend": "Channels",
  "fieldset" : [
    {
        "type": "select",
        "label": " ",
        "id":"select",
        "value": ["Composite","Color","Grayscale"]
      },
    {
        "type":"button",
        "label":" ",
        "id":"button",
        "value":"Channel 1"
      },
    {
        "type":"button",
        "label":" ",
        "id":"button",
        "value":"Channel 2"
      },
    {
        "type":"button",
        "label":" ",
        "id":"button",
        "value":"Channel 3"
      },
]
};

//Create popup for the menus
function createModal(ui){
  // Setting the modal
  let root = document.getElementById('modal');
  root.className="jim-modal modal-with-tab fade draggable";

  let popup = document.createElement('div');
  popup.id="popup";
  popup.draggable="true";
  popup.setAttribute('data-item','0');

  let head = document.createElement('header');
  head.id="popup_head";
  let header_div=document.createElement('div');
  let head_title=document.createElement('h1')
  head_title.textContent = ui.legend;
  header_div.appendChild(head_title)
  head.appendChild(document.createElement('br'));


  let foot= document.createElement('footer');
  foot.id="popup_foot";

  // Header
  //The close and resize buttons
  let close= document.createElement("span");
  let resize=document.createElement("span");
  close.className="modal-close";
  
  let icon_resize=document.createElement("i");
  icon_resize.className="fa fa-sort-asc";
  icon_resize.setAttribute("aria-hidden","true")
  resize.appendChild(icon_resize);
  icon_resize.onclick=function(){
    let content_popup=document.getElementById("popup_body");
    if (icon_resize.className=="fa fa-sort-asc"){
    icon_resize.className="fa fa-sort-desc";
    content_popup.style.display="none";
  } else if (icon_resize.className=="fa fa-sort-desc"){
    icon_resize.className="fa fa-sort-asc";
    content_popup.style.display="block";
  }
  }

  close.innerHTML="✖" ;
  header_div.appendChild(resize);
  header_div.appendChild(close);
  head.appendChild(header_div)

  popup.appendChild(head);
    // Content
  let tabs_div=document.createElement('div');
  tabs_div.className="modal-tab";
  let ul_tab=document.createElement('ul');
  ul_tab.className="modal-tabs";
  tabs_div.appendChild(ul_tab);
  let content = document.createElement("content");
  content.appendChild(tabs_div);
  content.id="popup_body";

  function createInput(type,value,ID){
    let input= document.createElement("input");
    input.type=type;
    input.defaultValue=value;
    input.id=ID;
    return input;
  }
  
  function slider_value(evt){
    let slider=this;
    let div_value=slider.parentNode;
    let input= slider.nextSibling;
    input.value=slider.value;
    div_value.setAttribute("data-value",slider.value);
  }
  
  function input_value(evt){
    let input=this;
    let div_value=input.parentNode;
    let slider=input.previousSibling;
    slider.value=input.value;
    div_value.setAttribute("data-value",input.value);
  }
  counter=0;

     const widgetCreator = {
      input_text : function(el,type,value,ID,tab) {
          let input= createInput(type.substring(6),value,ID);
          return content.appendChild(input);

      },
      input_number : function(el,type,value,ID,tab) {
          let input= createInput(type.substring(6),value,ID);
          return content.appendChild(input);

       },
      input_range : function(el,type,value,ID,tab) {
          let input= createInput(type.substring(6),value,ID);

          let slider_box=document.createElement('div');
          slider_box.className='jim-slider';
          let number_input = document.createElement("input");
          number_input.type="number";
          number_input.addEventListener("change",input_value);

          input.className="PIDControlSlider";
          input.addEventListener("input",slider_value);
          input.min=value[0];
          input.max=value[1];
          input.step=value[2];
          slider_box.appendChild(input);
          slider_box.appendChild(number_input);
          return content.appendChild(slider_box);

        },
      input_checkbox : function(el,type,value,ID,tab) {
          let input= createInput(type.substring(6),value,ID);        
          if (type.substring(6)=="checkbox" && ID=="preview"){
            let canvas=document.createElement('canvas');
            canvas.width="100";
            canvas.height="50";
            canvas.className="jim-preview"
            input.onchange=function(){
            if (this.checked){
              canvas.style.display="block";
            }
            else{
              canvas.style.display='none'
            }
          return tab.appendChild(canvas);
          }
          } else {
          let input= createInput(type.substring(6),value,ID);
          }
        return content.appendChild(input);
        },
      input_radio : function(el,type,value,ID,tab) {
          let input= createInput(type.substring(6),value,ID);
          return content.appendChild(input);

       },
      label : function(el,label,ID){
          let lab= document.createElement("label");
          lab.id="content-label"
          lab.textContent=label;
          return content.appendChild(lab);
       },
      select : function(el,type,options,ID,tab) {
          let select=document.createElement("select");
          select.id=ID;
          for (opt of options){
          //Addition des options
          let option=document.createElement("option");
          option.id=opt;
          option.textContent=opt;
          select.appendChild(option);
        }
          return content.appendChild(select);

        },

      suffix : function(value) {
          let suffix = document.createElement("label");
          suffix.id="content-suffix"
          suffix.textContent=value;
          return content.appendChild(suffix);
        },

      button: function(el,type,value,ID,tab){
        let button=document.createElement("button");
        button.value="Inset Border";
        button.style.borderStyle="inset";
        button.textContent=value;
        button.onclick=function(evt){
          this.style.borderStyle=(this.style.borderStyle!=="inset" ? 'inset' : 'outset')
          }
        return content.appendChild(button);
 
        },

      svg: function(el,type,value,ID,tab){
        let svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
        svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
        svg.setAttribute("width","100");
        svg.setAttribute("height","50");
        svg.id=ID;
        let shape=document.createElementNS("http://www.w3.org/2000/svg","rect");
        shape.setAttribute("width","100");
        shape.setAttribute("height","50");

        svg.appendChild(shape);
        return content.appendChild(svg);
        },
      eol: function(){
        content.appendChild(document.createElement("br"))
      },
      tab: function(el,type,value,id,tab){
        counter++;
        li_tab=document.createElement('li');
        btn_tab=document.createElement('a')
        btn_tab.className="jim-btn-tab";
        btn_tab.setAttribute("href","#jim"+counter);
        if (type=="tab"){
          btn_tab.textContent=el.label;
          li_tab.appendChild(btn_tab);
          return ul_tab.appendChild(li_tab);
        } 
      },
      children: function(el,type,value,ID,tab){
      let tab_div=document.createElement('div');
      tab_div.className="jim-tab-div";
      tab_div.id="jim"+counter;
        for (const elt of el.children){
          tab_div.appendChild(widgetCreator['label'](elt,elt.label,elt.id));
          tab_div.appendChild(widgetCreator[elt.type](el,elt.type,elt.value,elt.id,tab_div)); 
          tab_div.appendChild(widgetCreator['suffix'](elt.suffix));
        tab_div.appendChild(document.createElement("br"))
        }
      return content.appendChild(tab_div);
      }
    }

    for (const el of ui.fieldset) {
       // One row
      if (el.type!="tab"){
        widgetCreator['label'](el,el.label,el.id);
     }
        widgetCreator[el.type](el,el.type,el.value,el.id,content);
        widgetCreator['suffix'](el.suffix);
      if (el.type=="tab"){
        widgetCreator['children'](el,el.type,el.value,el.id);
       }
        widgetCreator['eol']();
     }

    popup.appendChild(content);

    // Footer
    let button_ok= document.createElement("button");
    button_ok.id="button_ok"
    button_ok.textContent="OK";
    foot.appendChild(button_ok);

    let button_cl= document.createElement("button");
    button_cl.id="button_cl"
    button_cl.textContent="Cancel";
    foot.appendChild(button_cl);

  popup.appendChild(foot);
  root.appendChild(popup);
}