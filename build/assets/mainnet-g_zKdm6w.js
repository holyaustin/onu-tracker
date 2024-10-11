import{H as b,I as p,N as d,J as m,K as j,t as x,E as y,j as e,L as _,M as g,P as w,T as N,U as T,V as i,W as n,X as v,Y as t,Z as q,_ as A}from"./use-toast-BWlaz5DZ.js";const $=new b(new p({network:d,fullnode:`https://aptos-${d}.nodit.io/${m}/v1`,indexer:`https://aptos-${d}.nodit.io/${m}/v1/graphql`}));function E(){return $}function k(s){return j({queryKey:["nodit-indexer-api",s],refetchInterval:!1,enabled:s.length>0,queryFn:async()=>{try{if(!s)return null;const r=(await E().queryIndexer({query:{variables:{accountAddress:s},query:`
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
              }`}})).current_fungible_asset_balances;return r?[...r]:null}catch(l){console.error(l)}}})}function S(){const[s,l]=x.useState(""),{data:r,isLoading:u}=k(s),c=r||[],{toast:f}=y();x.useEffect(()=>{s.length>0&&!u&&c.length===0&&f({variant:"default",title:"No balances found",description:`This account(${s}) has no fungible assets. Try another account address!`})},[c,u]);const h=a=>{a.preventDefault();const o=a.target;l(o.query.value)};return e.jsxs("div",{className:"flex items-center justify-between px-14 py-2 max-w-screen-xl mx-auto w-full flex-wrap gap-4",children:[e.jsxs("form",{className:"w-full flex gap-2 justify-center my-10",onSubmit:h,children:[e.jsx(_,{placeholder:"Enter an Aptos Wallet address e.g. 0x23e36cf4d0d476fa34fb67c13ce8ad7afe7f65cc708a42890673404df402e683 ",name:"query",className:"w-full text-xl"}),e.jsx(g,{type:"submit",children:e.jsx(w,{})})]}),e.jsx("div",{className:"w-full",children:e.jsxs(N,{className:"max-w-screen-xl mx-auto font-bold",children:[e.jsx(T,{children:e.jsxs(i,{children:[e.jsx(n,{className:"font-bold",children:"Asset"}),e.jsx(n,{className:"font-bold",children:"Symbol"}),e.jsx(n,{className:"font-bold",children:"Type"}),e.jsx(n,{className:"font-bold",children:"Coin Type"}),e.jsx(n,{className:"font-bold",children:"Decimal"}),e.jsx(n,{className:"font-bold",children:"Amount"})]})}),e.jsxs(v,{children:[!c.length&&e.jsx(i,{children:e.jsx(t,{className:"text-center",colSpan:6,children:"A list of fungible assets owned by account"})}),c.map((a,o)=>e.jsxs(i,{className:"items-center content-center",children:[e.jsx(t,{children:a.metadata.name}),e.jsx(t,{children:a.metadata.symbol}),e.jsx(t,{children:a.metadata.token_standard}),e.jsx(t,{children:e.jsx(q,{to:`https://explorer.aptoslabs.com/object/${a.metadata.asset_type}?network=mainnet`,target:"_blank",className:"underline",children:a.metadata.asset_type})}),e.jsx(t,{children:a.metadata.decimals}),e.jsx(t,{children:A(a.amount,a.metadata.decimals)})]},a.metadata.name+a.metadata.symbol+o))]})]})})]})}export{S as F};
