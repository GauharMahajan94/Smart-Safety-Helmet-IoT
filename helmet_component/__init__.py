
import streamlit.components.v1 as components
from pathlib import Path

_component_directory = Path(__file__).parent / "frontend" / "dist"

_smart_helmet = components.declare_component(
    "smart_safety_helmet",
    path=str(_component_directory)
)


def smart_helmet(key=None):
    return _smart_helmet(
        key=key,
        default=None
    )
