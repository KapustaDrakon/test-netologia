import './Content.css';

const Content = () => {
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__container-inner"></div>
        <div className="content__number">01</div>
        <div className="content__title">Использование ИИ позволяет значительно сэкономить ресурсы</div>
        <p className="content__text">
          Нейросетям можно поручить рутинные задачи — сортировку или создание изображений — или реализацию целого
          проекта. Для этого дизайнеру нужно разбираться в инструментах и их возможностях.
        </p>
      </div>
    </div>
  );
};

export default Content;
