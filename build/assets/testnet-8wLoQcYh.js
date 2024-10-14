import{a3 as b,a4 as j,ai as i,a5 as u,a6 as y,j as e,L as o,a7 as g,a as f,N as _,a8 as w,a9 as N,aa as T,ab as v,ac as q,ad as x,ae as n,af as A,ag as t,ah as $}from"./WalletSelector-Ng8UPMxT.js";const k=new b(new j({network:i,fullnode:`https://aptos-${i}.nodit.io/${u}/v1`,indexer:`https://aptos-${i}.nodit.io/${u}/v1/graphql`}));function S(){return k}function E(s){return y({queryKey:["nodit-indexer-api",s],refetchInterval:!1,enabled:s.length>0,queryFn:async()=>{try{if(!s)return null;const r=(await S().queryIndexer({query:{variables:{accountAddress:s},query:`
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
              }`}})).current_fungible_asset_balances;return r?[...r]:null}catch(l){console.error(l)}}})}function B(){return e.jsxs("div",{className:"flex items-center justify-between px-64 py-6 flex-wrap bg-green-900  mx-auto w-full ",children:[e.jsxs("div",{className:"flex flex-row gap-2",children:[e.jsx("img",{src:"/images/onu3.png",loading:"lazy",alt:"logo",width:"124"}),e.jsx("h1",{className:"display text-[#03D179]",children:" Onu-Tracker Powered by NODIT"})]}),e.jsx(o,{to:"/",className:"text-2xl font-bold text-white",children:"Home"}),e.jsx(o,{to:"/mainnet",className:"text-2xl font-bold text-white",children:"Mainnet"}),e.jsx(o,{to:"/testnet",className:"text-xl font-bold bg-[#03D179] text-primary h-10 px-4 py-1 rounded-md uppercase",children:"Testnet"}),e.jsx("div",{className:"flex gap-2 items-center flex-wrap",children:e.jsx(g,{})})]})}function F(){const[s,l]=f.useState(""),{data:r,isLoading:m}=E(s),c=r||[],{toast:h}=_();f.useEffect(()=>{s.length>0&&!m&&c.length===0&&h({variant:"default",title:"No balances found",description:`This account(${s}) has no fungible assets. Try another account address!`})},[c,m]);const p=a=>{a.preventDefault();const d=a.target;l(d.query.value)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsxs("div",{className:"flex items-center justify-between px-14 py-2 max-w-screen-xl mx-auto w-full flex-wrap gap-4",children:[e.jsxs("form",{className:"w-full flex gap-2 justify-center my-10",onSubmit:p,children:[e.jsx(w,{placeholder:"Enter an Aptos Wallet address e.g. 0x23e36cf4d0d476fa34fb67c13ce8ad7afe7f65cc708a42890673404df402e683 ",name:"query",className:"w-full text-xl"}),e.jsx(N,{type:"submit",children:e.jsx(T,{})})]}),e.jsx("div",{className:"w-full",children:e.jsxs(v,{className:"max-w-screen-xl mx-auto font-bold",children:[e.jsx(q,{children:e.jsxs(x,{children:[e.jsx(n,{className:"font-bold",children:"Asset"}),e.jsx(n,{className:"font-bold",children:"Symbol"}),e.jsx(n,{className:"font-bold",children:"Type"}),e.jsx(n,{className:"font-bold",children:"Coin Type"}),e.jsx(n,{className:"font-bold",children:"Decimal"}),e.jsx(n,{className:"font-bold",children:"Amount"})]})}),e.jsxs(A,{children:[!c.length&&e.jsx(x,{children:e.jsx(t,{className:"text-center",colSpan:6,children:"A list of fungible assets owned by account"})}),c.map((a,d)=>e.jsxs(x,{className:"items-center content-center",children:[e.jsx(t,{children:a.metadata.name}),e.jsx(t,{children:a.metadata.symbol}),e.jsx(t,{children:a.metadata.token_standard}),e.jsx(t,{children:e.jsx(o,{to:`https://explorer.aptoslabs.com/object/${a.metadata.asset_type}?network=mainnet`,target:"_blank",className:"underline",children:a.metadata.asset_type})}),e.jsx(t,{children:a.metadata.decimals}),e.jsx(t,{children:$(a.amount,a.metadata.decimals)})]},a.metadata.name+a.metadata.symbol+d))]})]})})]})]})}export{F as T};
