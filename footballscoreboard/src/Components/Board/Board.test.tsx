import React from "react";
import { render, screen } from "@testing-library/react";
import { Board } from "./Board";

import { Provider } from "react-redux";
import { AnyAction, Store, createStore } from "redux";
import { store } from "../../store/Store";
import { StoreState } from "../../store/Store";

const ReduxProvider = ({
  children,
  reduxStore,
}: {
  children: JSX.Element;
  reduxStore: Store<StoreState, AnyAction>;
}) => <Provider store={reduxStore}>{children}</Provider>;

test("renders Summary title", () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );
  render(wrapper({ children: <Board /> }));
  const title = screen.getByText("Summary");
  expect(title).toBeInTheDocument();
});

test("renders System Data title", () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    );
    render(wrapper({ children: <Board /> }));
    const title = screen.getByText("System Data");
    expect(title).toBeInTheDocument();
  });
