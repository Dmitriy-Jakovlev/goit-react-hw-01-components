import React from "react";
import Profile from "./task1/Profile";
import user from "./task1/user.json";
import Statistics from "./task2/Statistics";
import StatsRender from "./task2/StatsRender";
import statisticalData from "./task2/statistical-data.json";
import FriendList from "./task3/FriendList";
import friends from "./task3/friends.json";
import TransactionHistory from "./task4/TransactionHistory";
import transactions from "./task4/transactions.json";

const App = () => {
    return (
        <>
            <Profile {...user}/>
            <Statistics title="Upload stats">
            <StatsRender stats={statisticalData} />
            </Statistics>
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    )
}

export default App;