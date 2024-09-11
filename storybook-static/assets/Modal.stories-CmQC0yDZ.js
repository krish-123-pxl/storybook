import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{r as p}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d=({children:n,isOpen:s,onClose:t})=>s?o.jsx("div",{className:"modal-backdrop",children:o.jsxs("div",{className:"modal-box",children:[o.jsx("button",{onClick:t,className:"btn",children:"X"}),n]})}):null,c=d;d.__docgenInfo={description:"",methods:[],displayName:"Modal"};const h={title:"Modal",content:c,argTypes:{isOpen:{control:"boolean"}}},e=()=>{const[n,s]=p.useState(!0),t=()=>{s(!1)},i=()=>{s(!0)};return o.jsxs("div",{children:[o.jsx("button",{className:"btn",onClick:i,children:"show Modal"}),o.jsxs(c,{onClose:t,isOpen:n,children:[o.jsx("h2",{children:"Modal"}),o.jsx("p",{children:"provide modal content here."})]})]})};e.__docgenInfo={description:"",methods:[],displayName:"Template"};var a,l,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  return <div>\r
            <button className="btn" onClick={openModal}>show Modal</button>\r
            <Modal onClose={closeModal} isOpen={isModalOpen}>\r
                <h2>Modal</h2>\r
                <p>provide modal content here.</p>\r
            </Modal>\r
        </div>;
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const x=["Template"];export{e as Template,x as __namedExportsOrder,h as default};
