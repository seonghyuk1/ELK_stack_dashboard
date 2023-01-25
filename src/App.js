import "./App.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./App.module.css";

function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <div className={styles.SideBar}>
        <div
          onClick={() => {
            setCount(1);
          }}
        >
          1
        </div>
        <div
          onClick={() => {
            setCount(2);
          }}
        >
          2
        </div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <div className={styles.Container}>
        {count == 1 && (
          <iframe
            src="https://kwhcclab.com:20561/app/dashboards#/view/ea62dc70-9c8e-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15d,to:now-14d))&_a=(description:%EC%84%B1%EA%B3%BC%EC%9A%94%EC%95%BD1,filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,syncTooltips:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),hidePanelTitles:!f),gridData:(h:5,i:c6630041-015b-461b-b73b-08623d853f91,w:5,x:1,y:0),id:a6713b80-9642-11ed-a59b-6d42b3274f2d,panelIndex:c6630041-015b-461b-b73b-08623d853f91,title:'%ED%8C%90%EB%A7%A4%EA%B8%88%EC%95%A1%20%EC%9B%90',type:visualization,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:5,i:e1dad9b5-8800-440b-bebb-fcbd89868a0a,w:7,x:6,y:0),id:'5109d8b0-980d-11ed-a59b-6d42b3274f2d',panelIndex:e1dad9b5-8800-440b-bebb-fcbd89868a0a,type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:5,i:b75558b9-da62-42f6-ab15-29c267c7585c,w:4,x:13,y:0),id:'2cfbd760-9647-11ed-a59b-6d42b3274f2d',panelIndex:b75558b9-da62-42f6-ab15-29c267c7585c,type:visualization,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:5,i:'12367808-6c68-4d88-bf76-247a6985cdf1',w:8,x:17,y:0),id:'43241410-9810-11ed-a59b-6d42b3274f2d',panelIndex:'12367808-6c68-4d88-bf76-247a6985cdf1',type:lens,version:'8.5.3'),(embeddableConfig:(attributes:(references:!((id:'0bc00c31-d6dc-429d-8e79-9ec77092dd42',name:indexpattern-datasource-layer-33a93dd0-b9b3-4cc2-8c3f-51106548bb4e,type:index-pattern)),state:(adHocDataViews:(),datasourceStates:(indexpattern:(layers:('33a93dd0-b9b3-4cc2-8c3f-51106548bb4e':(columnOrder:!('074c09a4-e4e3-4345-864b-5c19951fa296','074c09a4-e4e3-4345-864b-5c19951fa296X0','074c09a4-e4e3-4345-864b-5c19951fa296X1','074c09a4-e4e3-4345-864b-5c19951fa296X2'),columns:('074c09a4-e4e3-4345-864b-5c19951fa296':(customLabel:!t,dataType:number,isBucketed:!f,label:%EA%B5%AC%EB%A7%A4%EC%A0%84%ED%99%98%EC%9C%A8,operationType:formula,params:(format:(id:percent,params:(decimals:2)),formula:'max(productOrder)%2Fmax(productVisit)',isFormulaBroken:!f),references:!('074c09a4-e4e3-4345-864b-5c19951fa296X2'),scale:ratio),'074c09a4-e4e3-4345-864b-5c19951fa296X0':(customLabel:!t,dataType:number,isBucketed:!f,label:'Part%20of%20max(productOrder)%2Fmax(productVisit)',operationType:max,params:(emptyAsNull:!f),scale:ratio,sourceField:productOrder),'074c09a4-e4e3-4345-864b-5c19951fa296X1':(customLabel:!t,dataType:number,isBucketed:!f,label:'Part%20of%20max(productOrder)%2Fmax(productVisit)',operationType:max,params:(emptyAsNull:!f),scale:ratio,sourceField:productVisit),'074c09a4-e4e3-4345-864b-5c19951fa296X2':(customLabel:!t,dataType:number,isBucketed:!f,label:'Part%20of%20max(productOrder)%2Fmax(productVisit)',operationType:math,params:(tinymathAst:(args:!('074c09a4-e4e3-4345-864b-5c19951fa296X0','074c09a4-e4e3-4345-864b-5c19951fa296X1'),location:(max:35,min:0),name:divide,text:'max(productOrder)%2Fmax(productVisit)',type:function)),references:!('074c09a4-e4e3-4345-864b-5c19951fa296X0','074c09a4-e4e3-4345-864b-5c19951fa296X1'),scale:ratio)),incompleteColumns:())))),filters:!(),internalReferences:!(),query:(language:kuery,query:''),visualization:(accessor:'074c09a4-e4e3-4345-864b-5c19951fa296',layerId:'33a93dd0-b9b3-4cc2-8c3f-51106548bb4e',layerType:data)),title:'',type:lens,visualizationType:lnsLegacyMetric),enhancements:(),hidePanelTitles:!f),gridData:(h:5,i:'8d6c1c40-300e-4198-8a33-1f1e09cbb7f2',w:5,x:25,y:0),id:'560ded60-9812-11ed-a59b-6d42b3274f2d',panelIndex:'8d6c1c40-300e-4198-8a33-1f1e09cbb7f2',title:%EA%B5%AC%EB%A7%A4%EC%A0%84%ED%99%98%EC%9C%A8,type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:5,i:f55f5f75-1aa5-4be1-835e-d277bf74da9d,w:6,x:30,y:0),id:'08a4a150-9861-11ed-a59b-6d42b3274f2d',panelIndex:f55f5f75-1aa5-4be1-835e-d277bf74da9d,type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:5,i:'985de424-da55-410d-a23b-2cbafd486586',w:5,x:36,y:0),id:'6939ffd0-9814-11ed-a59b-6d42b3274f2d',panelIndex:'985de424-da55-410d-a23b-2cbafd486586',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:5,i:'4f791279-1d7f-4e89-81a4-f3badb44824b',w:7,x:41,y:0),id:fbe20e50-9813-11ed-a59b-6d42b3274f2d,panelIndex:'4f791279-1d7f-4e89-81a4-f3badb44824b',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:9,i:'63e8885c-23a8-4f5a-9831-5e03c2fc039a',w:12,x:1,y:5),id:'56591830-9646-11ed-a59b-6d42b3274f2d',panelIndex:'63e8885c-23a8-4f5a-9831-5e03c2fc039a',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:9,i:'8fcf3a2b-b7e3-441d-8343-8473c20a3fd4',w:12,x:13,y:5),id:'69b7e550-9646-11ed-a59b-6d42b3274f2d',panelIndex:'8fcf3a2b-b7e3-441d-8343-8473c20a3fd4',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:9,i:'332fae02-132c-4630-b7ad-ec01d4a33cb5',w:11,x:25,y:5),id:'91b198f0-987e-11ed-a59b-6d42b3274f2d',panelIndex:'332fae02-132c-4630-b7ad-ec01d4a33cb5',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:9,i:'56cb239f-e626-415c-aa69-5e0980c9dfa5',w:12,x:36,y:5),id:'90c5dc00-9813-11ed-a59b-6d42b3274f2d',panelIndex:'56cb239f-e626-415c-aa69-5e0980c9dfa5',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:19,i:'2cb34abf-49d7-43ff-b963-e19f0e555342',w:47,x:1,y:14),id:cf057fe0-9816-11ed-a59b-6d42b3274f2d,panelIndex:'2cb34abf-49d7-43ff-b963-e19f0e555342',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:21,i:'60453fdf-3e6f-4f21-9d41-3bd8cd2c5334',w:47,x:1,y:33),id:'679c8a30-9819-11ed-a59b-6d42b3274f2d',panelIndex:'60453fdf-3e6f-4f21-9d41-3bd8cd2c5334',type:lens,version:'8.5.3'),(embeddableConfig:(enhancements:()),gridData:(h:23,i:'19d359fc-4047-45c2-a10b-d24c716cb85e',w:47,x:1,y:54),id:cd8ede10-9819-11ed-a59b-6d42b3274f2d,panelIndex:'19d359fc-4047-45c2-a10b-d24c716cb85e',type:lens,version:'8.5.3')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:Designovel_ELK_1,viewMode:view)&hide-filter-bar=true"
            height="600"
            width="800"
          ></iframe>
        )}
        {count == 2 && (
          <div style={{ backgroundColor: "red" }}>
            <iframe
              src="https://kwhcclab.com:20561/app/dashboards#/view/1ad3c1f0-9c9c-11ed-a59b-6d42b3274f2d?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15d%2Cto%3Anow-14d))&hide-filter-bar=true"
              height="600"
              width="800"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
