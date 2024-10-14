import{I as p,J as b,$ as d,K as u,M as j,j as e,a as m,C as y,O as g,P as _,T as w,U as N,V as T,W as i,X as n,Y as v,Z as t,L as q,_ as $}from"./use-toast-CERlIe8B.js";const A=new p(new b({network:d,fullnode:`https://aptos-${d}.nodit.io/${u}/v1`,indexer:`https://aptos-${d}.nodit.io/${u}/v1/graphql`}));function k(){return A}function E(s){return j({queryKey:["nodit-indexer-api",s],refetchInterval:!1,enabled:s.length>0,queryFn:async()=>{try{if(!s)return null;const r=(await k().queryIndexer({query:{variables:{accountAddress:s},query:`
              query FA_Balances($accountAddress: String) {
                current_fungible_asset_balances(
                  limit: 10
                  offset: 0
                  where: {
                    owner_address: {
                      _eq: $accountAddress
                    }
                  }
                ) {
                  owner_address
                  amount
                  storage_id
                  last_transaction_version
                  last_transaction_timestamp
                  is_frozen
                  metadata {
                    asset_type
                    creator_address
                    decimals
                    icon_uri
                    name
                    project_uri
                    symbol
                    token_standard
                    maximum_v2
                    supply_v2
                  }
                }
              }`}})).current_fungible_asset_balances;return r?[...r]:null}catch(l){console.error(l)}}})}function I(){return e.jsxs("div",{className:"flex items-center justify-between px-64 py-6 flex-wrap bg-green-900  mx-auto w-full ",children:[e.jsxs("div",{className:"flex flex-row gap-2",children:[e.jsx("img",{src:"/images/onu3.png",loading:"lazy",alt:"logo",width:"124"}),e.jsx("h1",{className:"display text-[#03D179]",children:" Onu-Tracker Powered by NODIT"})]}),e.jsx("a",{href:"/",className:"text-2xl font-bold text-white",children:"Home"}),e.jsx("a",{href:"/mainnet/",className:"text-2xl font-bold text-white",children:"Mainnet"}),e.jsx("a",{href:"",className:"text-xl font-bold bg-[#03D179] text-primary h-10 px-4 py-1 rounded-md uppercase",children:"Testnet"})]})}function B(){const[s,l]=m.useState(""),{data:r,isLoading:x}=E(s),c=r||[],{toast:f}=y();m.useEffect(()=>{s.length>0&&!x&&c.length===0&&f({variant:"default",title:"No balances found",description:`This account(${s}) has no fungible assets. Try another account address!`})},[c,x]);const h=a=>{a.preventDefault();const o=a.target;l(o.query.value)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs("div",{className:"flex items-center justify-between px-14 py-2 max-w-screen-xl mx-auto w-full flex-wrap gap-4",children:[e.jsxs("form",{className:"w-full flex gap-2 justify-center my-10",onSubmit:h,children:[e.jsx(g,{placeholder:"Enter an Aptos Wallet address e.g. 0x23e36cf4d0d476fa34fb67c13ce8ad7afe7f65cc708a42890673404df402e683 ",name:"query",className:"w-full text-xl"}),e.jsx(_,{type:"submit",children:e.jsx(w,{})})]}),e.jsx("div",{className:"w-full",children:e.jsxs(N,{className:"max-w-screen-xl mx-auto font-bold",children:[e.jsx(T,{children:e.jsxs(i,{children:[e.jsx(n,{className:"font-bold",children:"Asset"}),e.jsx(n,{className:"font-bold",children:"Symbol"}),e.jsx(n,{className:"font-bold",children:"Type"}),e.jsx(n,{className:"font-bold",children:"Coin Type"}),e.jsx(n,{className:"font-bold",children:"Decimal"}),e.jsx(n,{className:"font-bold",children:"Amount"})]})}),e.jsxs(v,{children:[!c.length&&e.jsx(i,{children:e.jsx(t,{className:"text-center",colSpan:6,children:"A list of fungible assets owned by account"})}),c.map((a,o)=>e.jsxs(i,{className:"items-center content-center",children:[e.jsx(t,{children:a.metadata.name}),e.jsx(t,{children:a.metadata.symbol}),e.jsx(t,{children:a.metadata.token_standard}),e.jsx(t,{children:e.jsx(q,{to:`https://explorer.aptoslabs.com/object/${a.metadata.asset_type}?network=mainnet`,target:"_blank",className:"underline",children:a.metadata.asset_type})}),e.jsx(t,{children:a.metadata.decimals}),e.jsx(t,{children:$(a.amount,a.metadata.decimals)})]},a.metadata.name+a.metadata.symbol+o))]})]})})]})]})}export{B as T};
