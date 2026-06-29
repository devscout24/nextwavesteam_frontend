import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

export default function PlayerEarning({}: {}) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="justify-between">
          <TableHead className=" ">
            <p className="px-2 py-4 font-bold text-nowrap text-[#1A1A2E]">
              Recent Transactions
            </p>
          </TableHead> 
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="">
            <p className="">Message — Arjun Mehta</p>
            <span className="text-xs text-[#6B7280]">
              TXN-8821 · 20 Jun 2025
            </span>
          </TableCell>
          <TableCell className="text-right text-[#00A63E]">+₹1,499</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="">
            <p className="">Withdrawal to HDFC ••4521</p>
            <span className="text-xs text-[#6B7280]">
              TXN-8799 · 10 Jun 2025
            </span>
          </TableCell>
          <TableCell className="text-right text-[#FB2C36]">−₹30,000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
