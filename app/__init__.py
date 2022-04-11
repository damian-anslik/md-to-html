from flask import Flask
from .config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    from .convert import convert_bp
    app.register_blueprint(convert_bp)

    return app