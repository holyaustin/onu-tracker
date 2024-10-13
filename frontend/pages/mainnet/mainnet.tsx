import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FungibleAssetBalance, useGetFungibleAssetBalances } from "@/hooks/useGetFungibleAssetBalances";
import { convertAmountFromOnChainToHumanReadable } from "@/utils/helpers";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";

function MainnetAssetBalances() {
  const [address, setAddress] = useState("");
  const { data, isLoading } = useGetFungibleAssetBalances(address);
  const balances = data || [];
  const { toast } = useToast();

  useEffect(() => {
    if (address.length > 0 && !isLoading && balances.length === 0) {
      toast({
        variant: "default",
        title: "No balances found",
        description: `This account(${address}) has no fungible assets. Try another account address!`,
      });
    }
  }, [balances, isLoading]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    setAddress(target.query.value);
  };

  return (
    <>
    <Header />
    <div className="flex items-center justify-between px-14 py-2 max-w-screen-xl mx-auto w-full flex-wrap gap-4">
           
      {/* Search Bar */}
      <form className="w-full flex gap-2 justify-center my-10" onSubmit={onSubmit}>
        <Input
          placeholder="Enter an Aptos Wallet address e.g. 0x23e36cf4d0d476fa34fb67c13ce8ad7afe7f65cc708a42890673404df402e683 "      
          name="query"
          className="w-full text-xl" />
        <Button type="submit">
          <Search />
        </Button>
      </form>

      {/* Search Result Table */}
      <div className="w-full">
        <Table className="max-w-screen-xl mx-auto font-bold">
          <TableHeader>
            <TableRow >
              <TableHead className="font-bold">Asset</TableHead>
              <TableHead className="font-bold">Symbol</TableHead>
              <TableHead className="font-bold">Type</TableHead>
              <TableHead className="font-bold">Coin Type</TableHead>
              <TableHead className="font-bold">Decimal</TableHead>
              <TableHead className="font-bold">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!balances.length && (
              <TableRow>
                <TableCell className="text-center" colSpan={6}>
                  A list of fungible assets owned by account
                </TableCell>
              </TableRow>
            )}
            {balances.map((item: FungibleAssetBalance, index) => (
              <TableRow key={item.metadata.name + item.metadata.symbol + index} className="items-center content-center">
                <TableCell>{item.metadata.name}</TableCell>
                <TableCell>{item.metadata.symbol}</TableCell>
                <TableCell>{item.metadata.token_standard}</TableCell>
                <TableCell>
                  <Link
                    to={`https://explorer.aptoslabs.com/object/${
                      item.metadata.asset_type
                    }?network=${import.meta.env.VITE_APP_NETWORK}`}
                    target="_blank"
                    className="underline"
                  >
                    {item.metadata.asset_type}
                  </Link>
                </TableCell>
                <TableCell>{item.metadata.decimals}</TableCell>
                <TableCell>{convertAmountFromOnChainToHumanReadable(item.amount, item.metadata.decimals)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </div>
      </>
  );
}

export default MainnetAssetBalances;
