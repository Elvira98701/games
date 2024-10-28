import styles from "./Skeleton.module.scss";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      {[...new Array(12)].map((_, index) => (
        <div className={styles.skeletonCard} key={index}>
          <p>Loading...</p>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
