# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Student, to link it to the parent table Cohort

Researched answer: A foreign key is a field,(or collection of them) that refers to another Parent tables primary key in a database. So you can reference the primary key of a parent table within a colum of the child table, to establish a relationship link and also make it easier to find it in the parent table.
So make a column in the child table Student and add the foreign key of the row in Cohort of which Cohort they attend. make a method to change this 

class ExampleAddStudent < ActiveRecord: :Migration
 def example
add_foreign_key :student_name, other_1, other_2, chohort_id
                                      foreign key^^^^^^^^^^
    end
end

class Student < ActiveRecord: :Base
belongs_to :Cohort
end

We can then set up our custom controller and views

2. Which RESTful routes must always be passed params? Why?

Your answer: All of them?

Researched answer: Create, Update, Destroy and Edit are always required to be passed params. The server has to understand exactly what information is being edited, created, shown or deleted. Index and New dont need a param as they're only a query. Although they can be added for a customized query.

3. Name three rails generator commands. What is created by each?

Your answer: rails g model = the table, rails g migrate = the info in the schema?

Researched answer: rails g model ModelName = A new Active Record Model Class is created (in the apps/models directory). 
rails g migration MigrationName = A new database migration file is created. It also adds info to the schema (like instructions).
rails g controller ControllerName = A controller Class is created in app/views. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index: Will get a list of the students

action: "POST" location: /students
create: Will create a new record and save the new student into the database.
 
action: "GET" location: /students/new
new: Will display a form allowing the user to create a new student

action: "GET" location: /students/2
show: Will render the view of student info

action: "GET" location: /students/2/edit
edit: Will let the user edit student 2 info by displaying a form

action: "PATCH" location: /students/2
update: will update and save any altered student info for  sutudent 2

action: "DELETE" location: /students/2
destroy: will delete student 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user who wants a to do list app, I want to be able to create an account, to see my personal name and add information.

As a user, I want to be able to sign into my account from different devices.

As a user, I want to be able to add tasks, daily, weekly or monthly or tasks that have a specific deadline. A task description can also be added optionally

As a user, I want to be able to view all of my tasks and dates, optionally view the descriptions too. I want to be able to filter these results by date if needed.

As a user, I want to be able to edit my tasks at will, changing dates, descriptions or the name of the task. Or even just updating the description or task name.

As a user, I want to be able to click if a task is completed, this will archive the task in a seperate task history view that can be cleared or kept hold of.

As a user, I can set if my daily, weekly, or monthly tasks are recurring. This means once complete, they will auto create next week, on any chosen week day/month date

As a user, I can edit the colour scheme of my tasks, and put them into sub catagories or tabs. Like work tasks, fitness tasks, cleaning tasks etc.

As a user, I can link my task to my emails or phone, to have email reminders, texts, or notifications to commplete tasks.

As a user, I can delete tasks, or send them to the archive uncompleted like automatically incomplete tasks by the date do.





