import React from "react";
import { FlatList } from "react-native";
import ExpenseItem, { ExpenseItemProps } from "../ExpenseItem";

function renderExpenseItem(itemData: {
  item: JSX.IntrinsicAttributes & ExpenseItemProps;
}) {
  return <ExpenseItem {...itemData.item} />;
}

const ExpensesList = ({ expenses }: any) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
