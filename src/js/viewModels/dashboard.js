
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojtable'],
 function(oj, ko, $, ArrayDataProvider) {
  
    function DashboardViewModel() {
      var self = this;

      var employeeArray = [
      {"name": "Manisha","designation": "web developer", "email": "manishavivrekar@gmail.com","phone": "8904585880","id":1},
      {"name": "Rakesh","designation": "Software Developer","email": "rakeshsharam@gmail.com", "phone": "8827234087","id": 2},
      {"name": "Monika","designation": "Web Designer","email": "monikasoni@gmail.com","phone": "9449844639","id": 3},
      {"name": "Priyanka","designation": "Software Engineer","email": "priyankachoudary@gmail.com","phone": "7415363517","id": 4},
      {"name": "Ankita","designation": "Software Developer","email": "ankitayadav@gmail.com","phone": "8867329921","id": 5},
      {"name": "Sara","designation": "Blogger","email": "Saraiyer@gmail.com","phone": "8904585881","id": 6},
      {"name": "Gabriel","designation": "JS Developer","email": "gabrielBrain@gmail.com","phone": "8827234088","id":7},
      {"name": "Janet","designation": "Front-end Developer","email": "janet@gmail.com","phone": "9449844640","id": 8 },
      {"name": "Frank","designation": "Entrepreenur","email": "Frank_fil@gmail.com","phone": "7415363518","id": 9},
      {"name": "Olivia","designation": "Accountant","email": "olivia_jorden@gmail.com","phone": "8867329922","id": 10},
      {"name": "Disha","designation": "Software Developer","email": "dishayadav@gmail.com","phone": "8904585882","id": 11},
      {"name": "Rakesh","designation": "Software Developer","email": "rakeshroy@gmail.com", "phone": "9449844641","id": 13},
      {"name": "Sara","designation": "Web Designer","email": "sararamiya@gmail.com","phone": "7415363519","id": 14},
      {"name": "Gabriel","designation": "Web Developer","email": "gabriel@gmail.com","phone": "8867329923","id": 15 },
      {"name": "Priyanka","designation": "Node JS Developer","email": "priyankasharma@gmail.com","phone": "8904855880","id": 16},
      {"name": "Ankita","designation": "Webcenter Developer","email": "ankitaChodhary@gmail.com","phone": "8827323087","id": 17},
      {"name": "Varun","designation": "ADF Developer","email": "varunsoni@gmail.com","phone": "9449777639","id": 18},
      {"name": "Rohit","designation": "Java Developer","email": "rohitpande@gmail.com","phone": "8936363517","id": 19 },
      {"name": "varun","designation": "Android Developer","email": "varunkumar@gmail.com","phone": "8867369921","id": 20 },
      {"name": "Ankita ","designation": "Software developer","email": "ankitapande@gmail.com","phone": "8867369928","id": 21}
      ];

      self.dataprovider = new ArrayDataProvider(employeeArray, {keyAttributes: 'name', implicitSort:[{attribute:
      'name', direction:'ascending'
      }]});
 }

    
 return new DashboardViewModel();

 $(document).ready(
   function(){
     ko.applyBindings(DashboardViewModel, document.getElementById('table'));
   }
 );
});

      
