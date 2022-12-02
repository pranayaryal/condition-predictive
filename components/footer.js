import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener">
            Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a
            href="https://www.glazestock.com/"
            target="_blank"
            rel="noopener ">
            Glazestock
          </a>
        </div>
      </Container>
    </div>
  );
}




