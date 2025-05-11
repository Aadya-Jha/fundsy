import React, { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { contractABI } from '../contractABI';

const Ledger = () => {
    const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

    const [userAddress, setUserAddress] = useState("");
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let mounted = true;
        
        // Function to get the user's address from MetaMask
        const getUserAddress = async () => {
            if (window.ethereum && mounted) {
                try {
                    const provider = new BrowserProvider(window.ethereum);
                    const signer = await provider.getSigner();
                    const address = await signer.getAddress();
                    setUserAddress(address);
                } catch (err) {
                    console.error("MetaMask error:", err);
                }
            }
        };

        // Updated fetchTransactions function
        const fetchTransactions = async () => {
            if (window.ethereum) {
                try {
                    const provider = new BrowserProvider(window.ethereum);
                    const contract = new Contract(CONTRACT_ADDRESS, contractABI, provider);

                    // Using the correct event filter
                    const events = await contract.queryFilter(contract.filters.TransactionLogged());

                    const parsed = events.map((event) => {
                        const { user, campaign, success, timestamp, txHash } = event.args;
                        return {
                            user,
                            campaign,
                            success,
                            timestamp: new Date(Number(timestamp) * 1000).toLocaleString(),
                            txHash,
                        };
                    });

                    setTransactions(parsed.reverse());
                } catch (err) {
                    console.error("Error fetching transactions:", err);
                }
            }
        };

        getUserAddress();
        fetchTransactions();

        return () => {
            mounted = false; // Cleanup
        };
    }, []); // Empty dependency array to only run once on mount

    return (
        <div className="p-6">
            <h2 className="text-purple text-5xl font-sans sm:px-5 pl-4 pr-4 font-extrabold text-center py-4">
                Public Ledger
            </h2>
            <div className="pt-3">
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
                                <td className="p-2 border text-sm text-gray-700">{tx.user}</td>
                                <td className="p-2 border text-sm text-gray-700">{tx.campaign}</td>
                                <td className="p-2 border text-sm text-gray-700">{tx.success ? "Yes" : "No"}</td>
                                <td className="p-2 border text-sm text-gray-700">{tx.timestamp}</td>
                                <td>
                                    <a href={`https://sepolia.etherscan.io/tx/${tx.txHash}`} target="_blank" rel="noopener noreferrer">
                                        View Tx
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ledger;
