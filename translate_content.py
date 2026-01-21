import os
import re

# Translation Dictionaries
common_replacements = {
    # Headers
    r"^## Work on the current change$": { "es": "## Trabajar en el cambio actual", "de": "## Arbeit an der aktuellen Änderung", "zh": "## 处理当前的变更", "pt": "## Trabalhar na mudança atual" },
    r"^## Start a working area$": { "es": "## Iniciar un área de trabajo", "de": "## Arbeitsbereich starten", "zh": "## 启动工作区", "pt": "## Iniciar uma área de trabalho" },
    r"^#### Basic Commands$": { "es": "#### Comandos Básicos", "de": "#### Grundlegende Befehle", "zh": "#### 基本命令", "pt": "#### Comandos Básicos" },
    r"^#### Container Operations$": { "es": "#### Operaciones de Contenedor", "de": "#### Container-Operationen", "zh": "#### 容器操作", "pt": "#### Operações de Contêiner" },
    r"^#### Images$": { "es": "#### Imágenes", "de": "#### Bilder", "zh": "#### 镜像", "pt": "#### Imagens" },
    r"^#### Volumes$": { "es": "#### Volúmenes", "de": "#### Volumen", "zh": "#### 卷", "pt": "#### Volumes" },
    r"^See also:$": { "es": "Ver también:", "de": "Siehe auch:", "zh": "另请参阅：", "pt": "Veja também:" },
    # Table Header
    r"^\| Alias \| Command .*\| Description .*\|$": {
        "es": r"| Alias | Comando               | Descripción                                                                |",
        "de": r"| Alias | Befehl                | Beschreibung                                                               |",
        "zh": r"| 别名  | 命令                   | 描述                                                                       |",
        "pt": r"| Alias | Comando               | Descrição                                                                  |"
    }
}

# Word Mapping for Table Descriptions
word_map = {
    "Show": {"es": "Mostrar", "de": "Zeigen", "zh": "显示", "pt": "Mostrar"},
    "List": {"es": "Listar", "de": "Auflisten", "zh": "列出", "pt": "Listar"},
    "Create": {"es": "Crear", "de": "Erstellen", "zh": "创建", "pt": "Criar"},
    "Delete": {"es": "Borrar", "de": "Löschen", "zh": "删除", "pt": "Excluir"},
    "Remove": {"es": "Eliminar", "de": "Entfernen", "zh": "移除", "pt": "Remover"},
    "Update": {"es": "Actualizar", "de": "Aktualisieren", "zh": "更新", "pt": "Atualizar"},
    "Add": {"es": "Añadir", "de": "Hinzufügen", "zh": "添加", "pt": "Adicionar"},
    "Move": {"es": "Mover", "de": "Bewegen", "zh": "移动", "pt": "Mover"},
    "Copy": {"es": "Copiar", "de": "Kopieren", "zh": "复制", "pt": "Copiar"},
    "Rename": {"es": "Renombrar", "de": "Umbenennen", "zh": "重命名", "pt": "Renomear"},
    "Build": {"es": "Construir", "de": "Bauen", "zh": "构建", "pt": "Construir"},
    "Install": {"es": "Instalar", "de": "Installieren", "zh": "安装", "pt": "Instalar"},
    "Search": {"es": "Buscar", "de": "Suchen", "zh": "搜索", "pt": "Pesquisar"},
    "Find": {"es": "Encontrar", "de": "Finden", "zh": "查找", "pt": "Encontrar"},
    "Print": {"es": "Imprimir", "de": "Drucken", "zh": "打印", "pt": "Imprimir"},
    "undo": {"es": "deshacer", "de": "rückgängig machen", "zh": "撤消", "pt": "desfazer"},
    "Manage": {"es": "Gestionar", "de": "Verwalten", "zh": "管理", "pt": "Gerenciar"},
    "Check": {"es": "Comprobar", "de": "Prüfen", "zh": "检查", "pt": "Verificar"},
    "Verify": {"es": "Verificar", "de": "Überprüfen", "zh": "验证", "pt": "Verificar"},
    "Open": {"es": "Abrir", "de": "Öffnen", "zh": "打开", "pt": "Abrir"},
    "Close": {"es": "Cerrar", "de": "Schließen", "zh": "关闭", "pt": "Fechar"},
    "Start": {"es": "Iniciar", "de": "Starten", "zh": "开始", "pt": "Iniciar"},
    "Stop": {"es": "Detener", "de": "Stoppen", "zh": "停止", "pt": "Parar"},
    "Restart": {"es": "Reiniciar", "de": "Neustarten", "zh": "重启", "pt": "Reiniciar"},
    "Initialize": {"es": "Inicializar", "de": "Initialisieren", "zh": "初始化", "pt": "Inicializar"},
    "directory": {"es": "directorio", "de": "Verzeichnis", "zh": "目录", "pt": "diretório"},
    "file": {"es": "archivo", "de": "Datei", "zh": "文件", "pt": "arquivo"},
    "files": {"es": "archivos", "de": "Dateien", "zh": "文件", "pt": "arquivos"}
} 

def translate_line(line, lang_code):
    # Apply Regex Replacements first
    for pattern, replacements in common_replacements.items():
        if lang_code in replacements:
            if re.search(pattern, line):
                return re.sub(pattern, replacements[lang_code], line)
    
    # Analyze Table Rows: | alias | command | description |
    # Target the LAST valid column (description), ignoring the empty string from split
    if line.strip().startswith("|") and line.count("|") >= 3:
        parts = line.split("|")
        # parts[0] is empty, parts[-1] is empty (usually)
        # The description is typically parts[-2]
        
        if len(parts) >= 4:
            desc_idx = -2
            desc = parts[desc_idx]
            
            # Safety: Don't translate if it looks like code (starts with ` or contains many `)
            # Actually description can contain code, but shouldn't BE just code.
            
            # Translate words
            for eng_word, trans_map in word_map.items():
                if lang_code in trans_map:
                    target = trans_map[lang_code]
                    desc = re.sub(r'\b' + re.escape(eng_word) + r'\b', target, desc, flags=re.IGNORECASE)
            
            parts[desc_idx] = desc
            return "|".join(parts)

    return line

def process_file(filepath, lang_code):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    new_lines = [translate_line(line.rstrip(), lang_code) for line in lines]
    
    with open(filepath, 'w') as f:
        f.write('\n'.join(new_lines) + '\n')

# Main
langs = ['es', 'de', 'zh', 'pt']
base_dir = "docs"

print("Starting Safer Translation...")
for lang in langs:
    print(f"Processing {lang}...")
    aliases_dir = os.path.join(base_dir, lang, "aliases")
    if not os.path.exists(aliases_dir): continue
    
    for root, dirs, files in os.walk(aliases_dir):
        for file in files:
            if file == "README.md":
                process_file(os.path.join(root, file), lang)

print("Done.")
