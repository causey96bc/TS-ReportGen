## Report Generator 
- Generates reports based on file imports and the data you request
-When completed you will be able to import multiple file types and data sets.
- The example of the file i use here is a CSV file However you can configure to run other types of files 

## CsvFileReader
- Here we utilize the File System api to read whatever file that we are attempting to use and seperates into a comma seperated array of arrays. 

## MatchReader
- the most important class in this project
- this reads the match data presented to it from the matchdata which is completed from the csv file reader. 
- this also can be configured to read other data sets because of the data reader interface established above
- it will be able to read the data as long as you convert into the proper structure. 

## MatchResult 
 Here we define a new data set that way when we hit our wins analysis analyzer it has the proper data to run our comparison to determine a teams certain amount of wins. 

 ## Data Analyzer 
 - here we our implementing compositional function inheritance that way our code can be re used on multiple levels. This is considered a generic function that will have different results based on the analysis that is run on our data
 - An example is the wins analysis file

 ## Wins Analysis
 - here we run an analysis on our csv file looking for a certain amount of wins that a certain football team has in a season. 
 - If the comparison is ran correctly when you run your npm scripts you will see that Man United has 18 wins.  

 ## Utils 
 - This is a simple date conversion function that will return your data data into a properly structered date data set.

## Index
-Takes the resulting data from the classes above and reads the data returned. 

## Ineritance 
- The purpose of the inheritance folder is to show the differences between compositional and inheritance based programming. Here is a great blog post article that explains the differences in more detail. https://blog.bitsrc.io/inheritance-vs-composition-which-is-better-for-your-javascript-project-16f4a077de9 


# heres a cool image to get you to think about composition. 
![composition](https://miro.medium.com/max/1200/1*mp9gh6RXvw3TMbBun2_fAg.jpeg)
