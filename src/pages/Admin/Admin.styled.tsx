import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4em);

  button {
    transition: all 200ms;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  .tables-list {
    display: flex;
    padding: 1.5em 2em;
    background-color: ${(props) => props.theme.colors.primary};

    .table-item {
      padding: 10px 30px;
      font-size: 20px;
      font-weight: bold;
      margin-right: 10px;
    }

    .table-item.selected {
      background-color: ${(props) => props.theme.colors.tertiary};
    }

    .table-item.new-table {
      background-color: ${(props) => props.theme.colors.successAdmin};
    }

    .divider {
      width: 2px;
      height: 100%;
      background-color: gray;
      margin-right: 10px;
    }
  }

  .board-products {
    height: 100%;
    display: flex;
    align-items: start;
    padding: 2em 2em;

    .category-products {
      display: flex;
      flex-direction: column;
      width: 15%;
      border: 1px ${(props) => props.theme.colors.dark} solid;

      .category-item {
        padding: 10px 30px;
        border: none;
        border-bottom: 1px ${(props) => props.theme.colors.dark} solid;
        font-size: 18px;
        text-align: left;
        font-weight: 600;
      }

      .category-item.selected {
        background-color: ${(props) => props.theme.colors.tertiary};
      }

      .category-item:last-child {
        border-bottom: none;
      }
    }

    .list-products {
      width: 45%;
      margin: 0 2%;

      .search-bar {
        width: 98%;
        display: flex;
        align-items: center;
        margin-bottom: 1em;

        input {
          width: 100%;
          font-size: 20px;
          padding: 3px 10px;
        }

        .icon {
          font-size: 40px;
          margin-left: 10px;
        }
      }

      .products {
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        .product-item {
          width: 22%;
          margin: 0 1% 10px 1%;
          border: 1px gray solid;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 16vh;
            object-fit: cover;
          }

          .item-content {
            padding: 0 10px 10px 10px;

            button {
              margin-top: 10px;
              padding: 5px 10px;
              width: 100%;
              font-weight: bold;
              color: ${(props) => props.theme.colors.ligth};
              background-color: ${(props) => props.theme.colors.secondary};
            }
          }
        }
      }
    }

    .account-summary {
      width: 40%;
      border: 1px gray solid;
      border-radius: 10px;
      background-color: #f5f5f5;
      .account-summary-contain {
        padding: 1em;
        .account-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .total {
            font-size: 30px;
            text-align: right;
          }
        }
        .btn-account {
          display: flex;
          align-items: center;
          padding: 8px 30px;
          font-size: 20px;
          font-weight: bold;
          color: ${(props) => props.theme.colors.ligth};
          background-color: ${(props) => props.theme.colors.successAdmin};
        }
        .table-account {
          width: 100%;
          margin: 1em 0;

          tr td {
            background-color: #cdcdcd;
          }
          tr {
            &:nth-child(2n) {
              td {
                background-color: ${(props) => props.theme.colors.ligth};
              }
            }
          }
        }
        .table-account,
        th,
        td {
          border: 1px solid black;
          border-collapse: collapse;
        }

        th {
          padding: 5px 10px;
          color: ${(props) => props.theme.colors.ligth};
          border: 1px solid ${(props) => props.theme.colors.ligth};
          background-color: ${(props) => props.theme.colors.primary};
        }

        td {
          padding: 5px 10px;
          font-size: 15px;

          .input-edit {
            width: 50px;
            font-size: 18px;
            text-align: center;
          }

          .actions {
            display: flex;
            .btn-delete,
            .btn-edit,
            .btn-save {
              height: 40px;
              width: 40px;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: ${(props) => props.theme.colors.danger};
              border: 2px solid ${(props) => props.theme.colors.danger};

              .icon {
              }
            }

            .btn-edit,
            .btn-save {
              margin-right: 10px;
              color: ${(props) => props.theme.colors.primary};
              border: 2px solid ${(props) => props.theme.colors.primary};
            }
            .btn-save {
              width: auto;
              font-weight: bold;
              padding: 0px 10px;
            }
          }
        }
      }
    }
  }
`
