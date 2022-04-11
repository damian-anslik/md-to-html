from flask import Blueprint, request, render_template
from markdown import markdown

convert_bp = Blueprint('convert', __name__)

@convert_bp.route('/')
def index():
    return render_template('convert.html')

@convert_bp.post("/")
def convert():
    md_string = request.form.get('markdown')
    html_string = markdown(md_string)
    return render_template('converted.html', html=html_string)