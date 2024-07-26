import PageTitle from "@/components/text/page-title";
import React from "react";
function delayTime(time: number) {
  return new Promise((resolve: any) =>
    setTimeout(() => {
      console.log("run after:", time);
      resolve();
    }, time)
  );
}

async function Produk() {
  // const produk = await delayTime(3000);
  return (
    <div>
      <PageTitle>Produk</PageTitle>
    </div>
  );
}

export default Produk;
