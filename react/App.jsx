const parent = document.getElementById("parent");
//console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {style:{backgroundColor:"brown",color:"white"}}, "ABES Engineering College");
const li1 =React.createElement("li", {style:{backgroundColor:"yellow"}}, "java");
const li2 =React.createElement("li", {style:{backgroundColor:"pink"}}, "python");
const li3 =React.createElement("li", {style:{backgroundColor:"orange"}}, "React");
const ul =React.createElement("ul", {style:{backgroundColor:"lightblue"}}, li1,li2,li3);
const pic =React.createElement("img", {src:"https://imgs.search.brave.com/oxmm9NNirda5-7F4F1DvywllMfWALLRHC3T-T1ORe9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL2VzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy84/LzIwMjIvMDcvcXVl/LWVzLXJlYWN0LWpz/LTEwMjR4NTEyLnBu/Zw", style:{height:'200px',width:'200px'}});
const myname=React.createElement("h1", {}, "Rishi Pandey");
const image = React.createElement("div", {style:{display:'flex', alignItems:'center',gap:"50 px"}}, pic, myname);
const hr = React.createElement("hr", {style:{ border:'2px solid #333'}});
const wrapper =React.createElement("div", {}, h2,image,hr,ul);
root.render(wrapper);



