from __future__ import annotations

from functools import lru_cache
from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings
from pydantic_settings import SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parents[2]
ENV_FILE = BASE_DIR / '.env'


class Settings(BaseSettings):
    app_name: str = Field(default='BTCFX API', alias='APP_NAME')
    app_env: str = Field(default='development', alias='APP_ENV')
    api_v1_prefix: str = Field(default='/api/v1', alias='API_V1_PREFIX')
    frontend_origins_raw: str = Field(default='http://localhost:3000', alias='FRONTEND_ORIGINS')

    postgres_server: str = Field(default='localhost', alias='POSTGRES_SERVER')
    postgres_port: int = Field(default=5432, alias='POSTGRES_PORT')
    postgres_db: str = Field(default='btcfx', alias='POSTGRES_DB')
    postgres_user: str = Field(default='btcfx', alias='POSTGRES_USER')
    postgres_password: str = Field(default='btcfx', alias='POSTGRES_PASSWORD')
    database_url: str | None = Field(default=None, alias='DATABASE_URL')

    jwt_secret_key: str = Field(default='change-me', alias='JWT_SECRET_KEY')
    jwt_algorithm: str = Field(default='HS256', alias='JWT_ALGORITHM')
    access_token_expire_minutes: int = Field(default=60, alias='ACCESS_TOKEN_EXPIRE_MINUTES')

    sqlalchemy_echo: bool = Field(default=False, alias='SQLALCHEMY_ECHO')

    model_config = SettingsConfigDict(env_file=ENV_FILE, env_file_encoding='utf-8', case_sensitive=False)

    @property
    def frontend_origins(self) -> list[str]:
        return [origin.strip() for origin in self.frontend_origins_raw.split(',') if origin.strip()]

    @property
    def sqlalchemy_database_uri(self) -> str:
        if self.database_url:
            return self.database_url
        return (
            f'postgresql+psycopg://{self.postgres_user}:{self.postgres_password}'
            f'@{self.postgres_server}:{self.postgres_port}/{self.postgres_db}'
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()