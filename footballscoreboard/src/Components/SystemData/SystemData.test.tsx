import React from "react";
import { render, screen } from "@testing-library/react";
import { SystemData } from "./SystemData";

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

test("renders Start New Game", async () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );
  render(wrapper({ children: <SystemData /> }));
  const startNewGameButton = await screen.findByRole("button", { name: "Start" });
  expect(startNewGameButton).toBeInTheDocument();
});

test("renders Games with Options", async () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );

  render(wrapper({ children: <SystemData /> }));
  const finishGameButtons = await screen.findAllByRole("button", { name: "Finish" });

  finishGameButtons.forEach((button) =>{
    expect(button).toBeInTheDocument();
})
});
