from flask import Blueprint, render_template

convert_bp = Blueprint('convert', __name__)

@convert_bp.route('/')
def index():
    return render_template('convert.html')