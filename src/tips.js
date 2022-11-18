export default [
  {
    title: 'Первоначальная настройка',
    description: 'Настройка информации о пользователе для всех локальных репозиториев. Произвести настройку можно двумя способами.',
    usages: [
      {
        description: 'С помощью команд вида:',
        command: 'git config --global ...',
      },
      {
        description: 'Напрямую через редактирование конфига:',
        command: 'nano ~/.gitconfig',
      },
    ],
  },
  {
    title: 'Создание репозитория',
    description: 'Создание нового репозитория или получение его по существующему URL-адресу',
    usages: [
      {
        description: 'Создаёт новый локальный репозиторий с заданным именем',
        command: 'git init <название проекта>',
      },
      {
        description: 'Скачивает репозиторий вместе со всей его историей изменений',
        command: 'git clone <url-адрес>',
      },
    ],
  },
  {
    title: 'Операции с файлами',
    description: 'Перемещение и удаление версий файлов репозитория',
    usages: [
      {
        description: 'Удаляет конкретный файл из рабочей директории и индексирует его удаление',
        command: 'git rm <файл>',
      },
      {
        description: 'Убирает конкретный файл из контроля версий, но физически оставляет его на своём месте',
        command: 'git rm --cached <файл>',
      },
      {
        description: 'Перемещает и переименовывает указанный файл, сразу индексируя его для последующего коммита',
        command: 'git mv <оригинальный файл> <новое имя>',
      },
    ],
  },
  {
    title: 'Игнорирование некоторых файлов',
    description: 'Исключение временных и вторичных файлов и директорий',
    usages: [
      {
        description: 'Список всех игнорируемых файлов в текущем проекте',
        command: 'git ls-files --others --ignored --exclude-standard',
      },
    ],
  },
  {
    title: 'Сохранение фрагментов',
    description: 'Сохранение и восстановление незавершённых изменений',
    usages: [
      {
        description: 'Временно сохраняет все незафиксированные изменения отслеживаемых файлов',
        command: 'git stash',
      },
      {
        description: 'Восстанавливает состояние ранее сохранённых версий файлов',
        command: 'git stash pop',
      },
      {
        description: 'Выводит список всех временных сохранений',
        command: 'git stash list',
      },
      {
        description: 'Сбрасывает последние временно сохранённыe изменения',
        command: 'git stash drop',
      },
    ],
  },
  {
    title: 'Внесение изменений',
    description: 'Просмотр изменений и создание коммитов (фиксация изменений)',
    usages: [
      {
        description: 'Перечисляет все новые или изменённые файлы, которые нуждаются в фиксации',
        command: 'git status',
      },
      {
        description: 'Показывает различия по внесённым изменениям в ещё не проиндексированных файлах',
        command: 'git diff',
      },
      {
        description: 'Индексирует указанный файл для последующего коммита',
        command: 'git add <файл>',
      },
      {
        description: 'Показывает различия между проиндексированной и последней зафиксированной версиями файлов',
        command: 'git diff --staged',
      },
      {
        description: 'Отменяет индексацию указанного файла, при этом сохраняет его содержимое',
        command: 'git reset <файл>',
      },
      {
        description: 'Фиксирует проиндексированные изменения и сохраняет их в историю версий',
        command: 'git commit -m \'< сообщение с описанием>\'',
      },
    ],
  },
  {
    title: 'Коллективная работа',
    description: 'Именованные серии коммитов и соединение результатов работы',
    usages: [
      {
        description: 'Список именованных веток коммитов с указанием выбранной ветки',
        command: 'git branch',
      },
      {
        description: 'Создаёт новую ветку',
        command: 'git branch <имя ветки>',
      },
      {
        description: 'Переключается на выбранную ветку и обновляет рабочую директорию до её состояния',
        command: 'git switch -c <имя ветки>',
      },
      {
        description: 'Вносит изменения указанной ветки в текущую ветку',
        command: 'git merge <имя ветки>',
      },
      {
        description: 'Удаляет выбранную ветку',
        command: 'git branch -d <имя ветки>',
      },
    ],
  },
  {
    title: 'Просмотр истории',
    description: 'Просмотр и изучение истории изменений файлов проекта',
    usages: [
      {
        description: 'История коммитов для текущей ветки',
        command: 'git log [--oneline] # [упрощённый вид]',
      },
      {
        description: 'История изменений конкретного файла, включая его переименование',
        command: 'git log --follow <файл>',
      },
      {
        description: 'Показывает разницу между содержанием коммитов двух веток',
        command: 'git diff <первая ветка>...<вторая ветка>',
      },
      {
        description: 'Выводит информацию и показывает изменения в выбранном коммите',
        command: 'git show <коммит>',
      },
    ],
  },
  {
    title: 'Откат коммитов',
    description: 'Удаление ошибок и корректировка созданной истории',
    usages: [
      {
        description: 'Отменяет все коммиты после заданного, оставляя все изменения в рабочей директории',
        command: 'git reset <коммит>',
      },
      {
        description: 'Сбрасывает всю историю вместе с состоянием рабочей директории до указанного коммита',
        command: 'git reset --hard <коммит>',
      },
    ],
  },
  {
    title: 'Синхронизация с удалённым репозиторием',
    description: 'Регистрация удалённого репозитория и обмен изменениями',
    usages: [
      {
        description: 'Скачивает всю историю из удалённого репозитория',
        command: 'git fetch <удалённый репозиторий>',
      },
      {
        description: 'Вносит изменения из ветки удалённого репозитория в текущую ветку локального репозитория',
        command: 'git merge <удалённый репозиторий>/<ветка>',
      },
      {
        description: 'Загружает все изменения локальной ветки в удалённый репозиторий',
        command: 'git push <удалённый репозиторий> <ветка>',
      },
      {
        description: 'Загружает историю из удалённого репозитория и объединяет её с локальной. pull = fetch + merge',
        command: 'git pull',
      },
    ],
  },
];

