from fastapi import FastAPI, Path, HTTPException
import json

app = FastAPI()

def load_data():
      with open('data.json', 'r') as f:
            data = json.load(f)
      return data

@app.get("/")
def root():
    return {"Server is up and running!"}

@app.get("/data")
def get_data():
    print("Here is your data : \n")
    data = load_data()
    return data

 
 
# PATH PARAMETES
@app.get("/data/{id}")
def get_patient_data(id:int):
      data = load_data()
      print("DATA = ",data)
      for patient in data:
            print("Patient = ", patient)     
            if id == patient["id"]:
                  return patient
      # return {"Not found"}
      raise HTTPException(status_code=404, detail="PatientID not found")


      
### STATUS CODES ###
# 2xx --- success
# 3xx --- redirection
# 4xx --- client error
# 5xx --- server error


### HTTPException - It is a special built in exception in FastAPI used to return custom HTTP error responses ###
# when something goes wrong in FastAPI
# For example, lets say user entered an id which is not even present, we will return "user not found" BUT the
# status code still would be 200 status OK which should be 404 Not found instead

            


# PATH FUNCTION - Imported from fastapi
# ... denotes that it is required (good practice to add these)
## Used when working in industry and someone needs to have just an overlook of APIs working. ex Clients

@app.get("/greet/{time}")
def greet_wrt_time(time : int = Path(..., description="Time(Hour) in 24 hour format", example="12")):
      time = time%24
      print(time)
      if(time<12 and time > 4):
            return "Good Morning"
      elif(time >12 and time<16):
            return "Good Afternoon"
      elif(time >16 and time<21):
            return "Good Evening"
      else:
            return "Good Night"
      


