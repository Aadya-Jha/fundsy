import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Ledger = () => {
  const location = useLocation();
  const passedTx = location.state || null;

  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (passedTx && passedTx.txHash && passedTx.txHash !== "N/A") {
      const newTx = {
        user: passedTx.donorAddress,
        campaign: passedTx.campaign,
        success: true,
        timestamp: new Date().toLocaleString(),
        txHash: passedTx.txHash,
      };

      // Prevent duplicates
      const exists = transactions.some((tx) => tx.txHash === newTx.txHash);
      if (!exists) {
        const updatedTransactions = [newTx, ...transactions];
        setTransactions(updatedTransactions);
        localStorage.setItem(
          "transactions",
          JSON.stringify(updatedTransactions)
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passedTx]);

  return (
    <div className="p-6">
      <h2 className="text-purple text-5xl font-sans sm:px-5 pl-4 pr-4 font-extrabold text-center py-4">
        Public Ledger
      </h2>

      <div className="pt-3">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-600 text-lg mt-6 font-sans">
            No donations yet.
          </p>
        ) : (
          <table className="table-auto w-full border border-gray-700 border-collapse mr-4">
            <thead>
              <tr>
                <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">
                  User
                </th>
                <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">
                  Campaign
                </th>
                <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">
                  Success
                </th>
                <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">
                  Timestamp
                </th>
                <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">
                  Tx
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td className="p-2 border text-sm text-gray-700">
                    {tx.user}
                  </td>
                  <td className="p-2 border text-sm text-gray-700">
                    {tx.campaign}
                  </td>
                  <td className="p-2 border text-sm text-gray-700">
                    {tx.success ? "Yes" : "No"}
                  </td>
                  <td className="p-2 border text-sm text-gray-700">
                    {tx.timestamp}
                  </td>
                  <td className="p-2 border text-sm text-blue-700">
                    <a
                      href={`https://sepolia.lineascan.build/tx/${tx.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Tx
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Ledger;
