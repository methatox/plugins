<?php declare(strict_types=1);

namespace DerichsTeamMembers\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1679836456TeamMembers extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1679836456;
    }

    public function update(Connection $connection): void
    {
        
        $query = <<<SQL
                CREATE TABLE IF NOT EXISTS `derichs_team_members` (
            `id`            INT             NOT NULL,
            `firstname`     VARCHAR(50)     NOT NULL,
            `lastname`      VARCHAR(50)     NOT NULL,
            `position`      VARCHAR(50)     NOT NULL,
            PRIMARY KEY (id)
        )
        ENGINE = InnoDB
        DEFAULT CHARSET = utf8mb4
        COLLATE = utf8mb4_unicode_ci;
        SQL;


        $connection->executeStatement($query);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}