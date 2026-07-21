# Публикация через GitHub Desktop

Репозиторий назначения:

`https://github.com/RawenHold/Buyursin.git`

## Вариант 1 — архив уже содержит Git-историю

1. Распакуйте архив в обычную папку, например:
   `C:\Users\SpaceX\Desktop\Buyursin`.
2. Откройте GitHub Desktop.
3. Выберите **File → Add local repository**.
4. Нажмите **Choose...** и выберите распакованную папку `Buyursin`.
5. Убедитесь, что справа сверху выбран аккаунт `RawenHold`.
6. Нажмите **Push origin**.
7. Откройте **Repository → View on GitHub** и проверьте, что файлы появились.

## Если GitHub Desktop не видит репозиторий

1. Выберите **File → Add local repository**.
2. Укажите именно папку, внутри которой находятся `package.json`, `src`, `public` и скрытая папка `.git`.
3. Не выбирайте родительскую папку, в которой лежит ещё одна вложенная папка проекта.

## Если отображается старый remote

Откройте **Repository → Repository settings → Remote** и укажите:

`https://github.com/RawenHold/Buyursin.git`

Затем нажмите **Save** и **Push origin**.

## Проверка перед публикацией

В GitHub Desktop выберите **Repository → Open in PowerShell** и выполните:

```powershell
npm ci
npm run check
```

Ожидаемый результат:

- secret scan passed;
- ESLint passed;
- TypeScript passed;
- Next.js build passed;
- доступны маршруты `/` и `/proposal`.
