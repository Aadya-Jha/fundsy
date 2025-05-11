import React from "react";

const Ledger = () =>{
    return(
        <div className="p-6">
            <h2 className="text-purple text-5xl font-sans sm:px-5 pl-4 pr-4 font-extrabold text-center py-4">Public Ledger</h2>
            <div className="pt-3">
                <table className="table-auto w-full border border-gray-700 border-collapse mr-4">
                <thead>
                    <tr>
                        <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">User</th>
                        <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">Campaign</th>
                        <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">Success</th>
                        <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">Timestamp</th>
                        <th className="font-sans text-xl font-bold text-violet-950 border border-gray-700">Tx</th>
                        </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Ledger