from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
from starlette.staticfiles import StaticFiles

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# serve static files
@app.get("/")
async def main():
    return FileResponse("public/index.html")

# chatbot API to be extended with OpenAI code
@app.post("/chat")
async def chat(request: Request):
    json = await request.json()
    print(json)

    # Azure OpenAI setup
    openai.api_base = "https://turbogptteam1.openai.azure.com/" # Add your endpoint here
    openai.api_key = "8f66561a4421475b9f871d0ba695215e"  #os.getenv("AZURE_OAI_KEY")"" # Add your OpenAI API key here
    deployment_id = "turbogpt" # Add your deployment ID here

    # Azure AI Search setup
    search_endpoint = "https://moviesearch.search.windows.net"; # Add your Azure AI Search endpoint here
    search_key = os.getenv("AZURE_SEARCH_KEY"); # Add your Azure AI Search admin key here
    search_index_name = "movies-team1-index"; # Add your Azure AI Search index name here
    
    

    return {"message": "Your message was: " + json["message"]}

# Image generattion API to be extended with OpenAI code
@app.post("/generateImage")
async def generateImage(request: Request):
    json = await request.json()
    print(json)

    ############################
    ### Add OpenAI code here ###
    ############################

    return {"url": "https://via.placeholder.com/100"}

app.mount("/", StaticFiles(directory="public"), name="ui")