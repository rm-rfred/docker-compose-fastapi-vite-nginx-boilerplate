from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.docs import (
    get_redoc_html,
    get_swagger_ui_html,
)
from fastapi.responses import Response
import uvicorn

root_router = APIRouter()
app = FastAPI(title="DOCKER COMPOSE FASTAPI VITE NGINX BOILERPLATE API", openapi_url="/api/openapi.json")


@app.get("/api/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    """
    Get Swagger doc
    :return: HTML Page
    """
    return get_swagger_ui_html(
        openapi_url=app.openapi_url,
        title=app.title + " - Swagger UI",
        oauth2_redirect_url="/api" + app.swagger_ui_oauth2_redirect_url,
        swagger_favicon_url="#",
    )


@app.get("/api/redoc", include_in_schema=False)
async def redoc_html():
    """
    Redoc Swagger page
    :return: HTML Page
    """
    return get_redoc_html(
        openapi_url=app.openapi_url,
        title=app.title + " - Redoc",
        redoc_favicon_url="#",
    )

origins = ["http://localhost", "http://frontend:5173", "*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
async def root() -> Response:
    """
    Health check
    :return: HTTP Response with app status
    """
    return Response(status_code=200)


if __name__ == "__main__":
    uvicorn.run("main:app",
                host="0.0.0.0",
                reload=True,
                port=842)
