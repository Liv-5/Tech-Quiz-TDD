import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  it('should render the "Start Quiz" button initially', () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("be.visible");
  });

  it("should load questions when the quiz starts", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click(); // Click the Start button
    cy.wait("@getQuestions"); // Wait for the questions to be loaded
  });

  it("should correctly answer a question and update the score", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    //  ?????
  });

  it("should navigate to the next question after an answer is clicked", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();

    cy.wait("@getQuestions");
  });

  it("should allow the user to take a new quiz after completion", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    // ?????????

    // Check that the "Take New Quiz" button is shown
    cy.contains("Take New Quiz").should("be.visible").click();

    // Ensure the quiz starts over
    cy.contains("Start Quiz").should("be.visible");
  });
});
