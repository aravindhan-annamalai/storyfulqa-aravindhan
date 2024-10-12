Scenario 1: Verify successful registration of the user with valid credentials
Scenario: User can successfully sign up with valid details
  Given the user is on the trial sign-up page
  When the user enters a valid "First name", "Last name", "email", "password", "Check Agree T&Cs" and Complete captcha verification  
  And the user clicks on the "Trail Sign Up" button
  Then the user should be successfully registered
  And the user should see a confirmation message
Scenario 2: Verify data entered in password meets the requirement
Scenario: Password meets the minimum requirements
  Given the user is on the trial sign-up page
  When the user enters a password of at least 8 characters
  And clicks on the "Trail Sign Up" button
  Then the form should be submitted successfully
  And the user should receive a success message
Scenario 3: Email field validation
Scenario: Email field accepts a valid email format
  Given the user is on the trial sign-up page
  When the user enters a valid email in the format "example@example.com"
  And clicks on the "Trail Sign Up" button
  Then the form should be submitted successfully
  And no validation errors should be displayed
Scenario 4: Verify that user fills required field before submission
Scenario: Trail Sign up Form submission with all required fields filled
  Given the user is on the trial sign-up page
  When the user fills all required fields
  And clicks on the "Trail Sign Up" button
  Then the form should submit successfully
  And no validation errors should appear
Negative Scenarios:
Scenario 5 Verify that user cannot sign up with empty required fields
Scenario: User cannot submit the form with empty required fields
  Given the user is on the trial sign-up page
  When the user leaves the required fields "name", "email", or "password" empty
  And clicks on the "Trail Sign Up" button
  Then the user should see a validation error message for the empty fields
  And the form should not be submitted
Scenario 6: Invalid Email format validation
Scenario: Email field does not accept an invalid email format
  Given the user is on the trial sign-up page
  When the user enters an invalid email format like "user@domain"
  And clicks on the "Trail Sign Up" button
  Then the user should see an error message for an invalid email
  And the form should not be submitted
Scenario 7: Validate minimum length criteria for password
Scenario: Password below the minimum required length
  Given the user is on the trial sign-up page
  When the user enters a password with less than 8 characters
  And clicks on the "Trail Sign Up" button
  Then the user should see a validation error message for the password length
  And the form should not be submitted
Scenario 8: Verify that form submission accepts used email address
Scenario: User cannot register with an already registered email
  Given the user is on the trial sign-up page
  When the user enters an email that is already associated with an account
  And clicks on the "Trail Sign Up" button
  Then the user should see an error message indicating the email is already in use
  And the form should not be submitted
