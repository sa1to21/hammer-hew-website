# 🎯 SEO Optimization Plan - Hammer & Hew

## 📍 Текущее состояние SEO

### ✅ Что уже настроено хорошо:

**Основной SEO компонент:** `src/components/common/SEO.tsx`
- Полные метатеги (title, description, keywords)
- Open Graph и Twitter Cards
- Структурированные данные Schema.org (LocalBusiness + HomeImprovementBusiness)
- Геоданные для Bay Area
- Рейтинги и отзывы
- Локальные метатеги

**Текущие ключевые слова:**
```
"deck construction, deck restoration, deck repair, Bay Area, licensed contractor, deck builder"
```

**Sitemap:** `public/sitemap.xml` с приоритетами секций

---

## 🔧 План оптимизации

### 1. **Обновить базовый HTML** (`index.html`)
**Проблема:** Дефолтный Vite title "Vite + React + TS"

**Исправить:**
- Заменить на SEO-оптимизированный title
- Добавить базовые метатеги для совместимости
- Обновить favicon на логотип компании

### 2. **Расширить ключевые слова**
**Текущие:** Базовые термины

**Добавить:**
- **Локальные:** San Francisco, South Bay, Peninsula, Silicon Valley, Palo Alto, San Jose
- **Материалы:** composite decking, cedar deck, redwood deck, pressure treated
- **Услуги:** deck repair, deck refinishing, deck staining, custom deck design
- **Коммерческие:** deck contractor, deck builder, deck expert, licensed deck company

**Новый набор:**
```
"deck construction, deck restoration, deck repair, composite decking, cedar deck, redwood deck, Bay Area deck contractor, San Francisco deck builder, Silicon Valley deck expert, licensed deck company, deck refinishing, deck staining, custom deck design"
```

### 3. **Обновить Sitemap** (`public/sitemap.xml`)
**Проблемы:**
- Ссылка на несуществующую секцию `#about` 
- Отсутствуют новые секции

**Исправить:**
- `#about` → `#why-choose-us`
- Добавить `#before-after` секцию
- Добавить `#testimonials` секцию
- Обновить lastmod даты

### 4. **Улучшить структурированные данные**
**Schema.org обновления:**

**Услуги:**
- Убрать конкретные цены ($15,000+)
- Добавить "Contact for pricing"
- Расширить список сервисов

**Локации:**
- Добавить больше городов Bay Area
- Включить Silicon Valley, Peninsula
- Обновить область обслуживания

**Изображения:**
- Заменить placeholder изображения на реальные фотографии проектов
- Добавить alt-теги для всех изображений

### 5. **Контентная SEO-оптимизация**

**Заголовки секций:**
- Hero: Добавить больше ключевых слов
- Services: Оптимизировать описания сервисов
- Gallery: SEO-описания проектов
- Process: Ключевые слова в описаниях этапов

**Микроданные:**
- Добавить structured data для каждого проекта в галерее
- Schema для отзывов клиентов
- Данные о ценах и услугах

### 6. **Локальные landing pages** (Фаза 2)
**Создать отдельные SEO-страницы для:**
- San Francisco deck construction
- Palo Alto deck builder  
- San Jose deck restoration
- Silicon Valley deck contractor

---

## 📊 Приоритетность задач

### 🔥 **Высокий приоритет:**
1. Исправить index.html title
2. Расширить ключевые слова в SEO.tsx
3. Обновить sitemap.xml

### 🟡 **Средний приоритет:**
4. Улучшить структурированные данные
5. Оптимизировать контент секций

### 🔄 **Низкий приоритет:**
6. Создание локальных landing pages

---

## 🎯 Ожидаемые результаты

- Улучшение позиций по локальным запросам Bay Area
- Больше органического трафика по ключевым словам декинга
- Лучшая видимость в Google My Business
- Повышение конверсии через оптимизированные мета-описания

---

## 📁 Файлы для изменения

1. `index.html` - базовые метатеги
2. `src/components/common/SEO.tsx` - ключевые слова и structured data
3. `public/sitemap.xml` - карта сайта
4. Секции контента - оптимизация текстов

---

*План создан: 2025-08-29*
*Статус: Готов к выполнению*