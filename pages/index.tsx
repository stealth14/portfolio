import User, { get, getRepos, Repo } from "@/lib/users/user";
import { LinkOutlined, SyncOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Image, Row, Typography } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const RONNY_CAJAS_GITHUB_USERNAME = "stealth14";

export default function Home() {
  const [user, setUser] = useState<null | User>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { user } = await get(RONNY_CAJAS_GITHUB_USERNAME);
      setUser(user);
      const { repos } = await getRepos(RONNY_CAJAS_GITHUB_USERNAME);
      setRepos(repos);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {user ? (
          <Row style={{ width: "100%" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <div className={styles.content}>
                <Typography.Title level={1}>{user.name}</Typography.Title>
                <Typography.Paragraph style={{ color: "gray", fontSize: 25 }}>
                  Github profile
                </Typography.Paragraph>
                <div className={styles["avatar-wrapper"]}>
                  <Avatar
                    onClick={() => {}}
                    size={200}
                    src={<Image alt="avatar" src={user.avatar_url} />}
                  />
                </div>
                <div className={styles.description}>
                  <Item label={"Nombre"} value={String(user.name)} />
                  <Item
                    label={"Repositorios públicos"}
                    value={String(user.public_repos)}
                  />
                  <Item label={"Seguidores"} value={String(user.followers)} />
                  <Button
                    onClick={() => {
                      window.open(user.html_url, "_blank");
                    }}
                  >
                    Ver en github
                  </Button>
                </div>
              </div>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              className={styles.repos}
            >
              <span>Listado de repositorios:</span>
              <div className={styles.list}>
                {repos.map((repo, index) => {
                  return <RepoItem key={index} repo={repo} />;
                })}
              </div>
            </Col>
          </Row>
        ) : (
          <div
            style={{
              fontSize: 50,
              textAlign: "center",
              width: "100%",
            }}
          >
            {!loading && <SyncOutlined spin={true} />}
          </div>
        )}
      </div>
    </>
  );
}

const Item = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={styles.item}>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
};

const RepoItem = ({ repo }: { repo: Repo }) => {
  return (
    <>
      <Divider plain>
        <Typography.Link
          onClick={() => {
            window.open(repo.html_url, "_blank");
          }}
        >
          {repo.name} <LinkOutlined />
        </Typography.Link>
      </Divider>
    </>
  );
};
